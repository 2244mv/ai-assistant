const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const streamMessageToAI = async (messages, onChunk, signal) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages,
            temperature: 0.7,
            stream: true,
        }),
        signal,
    });

    if (!response.ok) {
        const err = await response.text();
        console.error("Groq Error:", err);
        throw new Error(err);
    }

    if (!response.body) {
        throw new Error("Readable stream not supported");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let fullText = "";
    let buffer = "";

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop(); // keep incomplete line

        for (const line of lines) {
            if (!line.startsWith("data:")) continue;

            const data = line.replace("data: ", "").trim();

            if (data === "[DONE]") return fullText;

            try {
                const json = JSON.parse(data);
                const content = json?.choices?.[0]?.delta?.content;

                if (content) {
                    fullText += content;
                    onChunk(fullText);
                }
            } catch (e) {
                // ignore broken chunks safely
            }
        }
    }

    return fullText;
};
