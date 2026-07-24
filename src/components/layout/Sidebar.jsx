import { useState } from "react";
import {
  Plus,
  MessageSquare,
  Trash2,
  Search,
  Home,
  Sparkles,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router";

import { useChat } from "../../hooks/useChat";
import { ROUTES } from "../../routes/router";

const Sidebar = () => {
  const { chats, setActiveChatId, activeChatId, deleteChat, createChat } =
    useChat();

  const [query, setQuery] = useState("");

  const filtered = chats.filter((chat) =>
    chat.title.toLowerCase().includes(query.toLowerCase()),
  );

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-3 py-2 font-medium transition ${
      isActive
        ? "bg-[#8B5CF6] text-white shadow-[0_0_25px_rgba(139,92,246,0.45)]"
        : "hover:bg-[#8B5CF6] hover:text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]"
    }`;

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white text-gray-900 dark:border-[#252B35] dark:bg-[#0B0D10] dark:text-white">
      {/* Header */}

      <div className="flex h-14 items-center border-b border-gray-200 px-4 font-semibold dark:border-[#252B35]">
        AI Chat
      </div>

      {/* New Chat */}

      <div className="p-3">
        <button
          onClick={() => createChat("")}
          className="flex w-full items-center gap-2 rounded-xl bg-[#8B5CF6] px-3 py-2 font-medium text-white transition hover:bg-[#7C3AED] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]"
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* History */}

      <div className="flex-1 space-y-1 overflow-y-auto px-2">
        {filtered.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChatId(chat.id)}
            className={`group flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 transition ${
              chat.id === activeChatId
                ? "bg-[#211538] text-purple-300"
                : "hover:bg-gray-100 dark:hover:bg-[#11151B]"
            }`}
          >
            <div className="flex min-w-0 items-center gap-2">
              <MessageSquare size={16} />

              <span className="truncate text-sm">
                {chat.title || "New Chat"}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();

                deleteChat(chat.id);
              }}
              className="text-red-500 opacity-0 transition group-hover:opacity-100 hover:text-red-400"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Search */}

      <div className="border-t border-gray-200 p-3 dark:border-[#252B35]">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-3 py-2 dark:border-[#35224F] dark:bg-[#11151B]">
          <Search size={16} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* Navigation */}

      <div className="space-y-2 border-t border-gray-200 p-3 dark:border-[#252B35]">
        <NavLink to={ROUTES.HOME} className={navClass}>
          <Home size={18} />
          Home
        </NavLink>

        <NavLink to={ROUTES.FEATURES} className={navClass}>
          <Sparkles size={18} />
          Features
        </NavLink>

        <NavLink to={ROUTES.SETTINGS} className={navClass}>
          <Settings size={18} />
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
