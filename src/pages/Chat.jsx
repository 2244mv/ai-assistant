import { useState, useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { Send } from "lucide-react";
import Message from "../components/chat/Message";
import FeatureCards from "../components/home/FeatureCards";

const Chat = () => {
  const { activeChat, sendMessage, loading, stopGenerating } = useChat();
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage(input);
    setInput("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages, loading]);

  // 🔥 FEATURE ACTION HANDLER
  const handleFeatureAction = (action) => {
    const prompts = {
      ask: "Answer my question clearly and simply",
      code: "Help me write or fix code",
      explain: "Explain a topic in simple language",
      ideas: "Give me unique project ideas",
    };

    sendMessage(prompts[action] || "Hello");
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto w-full space-y-6">
          {!activeChat?.messages?.length ? (
            <FeatureCards onAction={handleFeatureAction} />
          ) : (
            activeChat.messages.map((msg, i) => (
              <Message key={i} message={msg} />
            ))
          )}

          {loading && (
            <div className="text-center text-gray-400 animate-pulse">
              AI is typing...
              <button
                onClick={stopGenerating}
                className="ml-3 text-red-500 underline"
              >
                Stop
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT */}
      <div className="p-4 border-t dark:border-gray-700 flex gap-2 bg-white dark:bg-gray-900">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask something..."
          className="flex-1 px-3 py-2 rounded-md border dark:bg-gray-800 dark:border-gray-700 focus:outline-none"
        />

        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
