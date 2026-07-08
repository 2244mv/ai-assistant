import { useState } from "react";
import { Plus, MessageSquare, Settings, Trash2, Search } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";
import { useChat } from "../../hooks/useChat";

const Sidebar = () => {
  const { isOpen } = useSidebar();
  const { chats, setActiveChatId, activeChatId, deleteChat } = useChat();

  const [query, setQuery] = useState("");

  const filtered = chats.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <aside
      className={`h-screen flex flex-col border-r dark:border-gray-700 bg-white dark:bg-gray-800 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4 font-bold border-b dark:border-gray-700">AI Chat</div>

      {/* SEARCH */}
      {isOpen && (
        <div className="p-3">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md">
            <Search size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>
      )}

      {/* NEW CHAT */}
      <div className="p-2">
        <div className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
          <Plus size={18} />
          {isOpen && "New Chat"}
        </div>
      </div>

      {/* CHAT LIST (ONLY THIS SCROLLS) */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        {filtered.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChatId(chat.id)}
            className={`group flex justify-between items-center px-3 py-2 rounded-md cursor-pointer
              ${
                chat.id === activeChatId
                  ? "bg-blue-100 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            <div className="flex items-center gap-2">
              <MessageSquare size={16} />
              {isOpen && <span className="text-sm truncate">{chat.title}</span>}
            </div>

            {isOpen && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* SETTINGS */}
      <div className="p-2 border-t dark:border-gray-700">
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
          <Settings size={18} />
          {isOpen && "Settings"}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
