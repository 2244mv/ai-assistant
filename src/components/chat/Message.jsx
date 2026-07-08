import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Copy } from "lucide-react";
import { useState } from "react";

const Message = ({ message }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`group relative max-w-2xl p-3 rounded-lg whitespace-pre-wrap ${
        message.role === "user"
          ? "ml-auto bg-blue-600 text-white"
          : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      {/* COPY BUTTON */}
      {message.role === "assistant" && (
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-white"
        >
          <Copy size={16} />
          {copied && (
            <span className="ml-2 text-xs text-green-400">Copied</span>
          )}
        </button>
      )}

      {/* ASSISTANT MESSAGE */}
      {message.role === "assistant" ? (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, children }) {
                return !inline ? (
                  <SyntaxHighlighter
                    language="javascript"
                    customStyle={{
                      borderRadius: "8px",
                      padding: "10px",
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-300 dark:bg-gray-600 px-1 rounded">
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="text-sm leading-relaxed">{message.content}</div>
      )}
    </div>
  );
};

export default Message;
