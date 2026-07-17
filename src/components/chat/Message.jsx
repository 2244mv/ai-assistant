import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { useState } from "react";

const Message = ({ message }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`group relative max-w-3xl rounded-2xl p-4 whitespace-pre-wrap ${
        message.role === "user"
          ? `ml-auto bg-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]`
          : `border border-gray-200 bg-gray-100 text-gray-900 dark:border-[#252B35] dark:bg-[#11151B] dark:text-white`
      } `}
    >
      {/* Copy Button */}

      {message.role === "assistant" && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-gray-400 opacity-0 transition group-hover:opacity-100 hover:text-[#8B5CF6]"
        >
          <Copy size={16} />

          {copied && (
            <span className="ml-2 text-xs text-[#8B5CF6]">Copied</span>
          )}
        </button>
      )}

      {message.role === "assistant" ? (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, children }) {
                return !inline ? (
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneDark}
                    PreTag="div"
                    customStyle={{
                      borderRadius: "14px",

                      padding: "18px",

                      marginTop: "12px",

                      marginBottom: "12px",

                      background: "#0B0D10",

                      border: "1px solid #252B35",

                      fontSize: "14px",

                      lineHeight: "1.7",

                      overflowX: "auto",

                      textShadow: "none",
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily:
                          "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace",

                        textShadow: "none",
                      },
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className="rounded-md bg-purple-100 px-1.5 py-0.5 font-mono text-sm text-purple-700 dark:bg-[#211538] dark:text-purple-300">
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
