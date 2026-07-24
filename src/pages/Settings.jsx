import { useContext, useState } from "react";

import {
  Palette,
  Bot,
  Mic,
  MessageSquare,
  Trash2,
  Sparkles,
} from "lucide-react";

import { useChat } from "../hooks/useChat";
import { AI_FEATURES } from "../config/features";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  const { clearAllChats } = useChat();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showToast, setShowToast] = useState(false);

  const handleClearChats = () => {
    clearAllChats();

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <div className="relative h-full overflow-y-auto bg-[#f7f7f8] p-5 text-gray-900 dark:bg-[#0B0D10] dark:text-white">
      {/* Toast */}

      {showToast && (
        <div className="fixed top-5 right-5 z-50 rounded-xl border border-[#8B5CF6] bg-[#11151B] px-5 py-3 text-sm text-white shadow-[0_0_25px_rgba(139,92,246,0.5)]">
          ✅ All chats cleared successfully
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        {/* Header */}

        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-[#8B5CF6]/20 p-3 text-[#8B5CF6] shadow-[0_0_25px_rgba(139,92,246,0.35)]">
            <Sparkles size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Settings</h1>

            <p className="text-gray-500 dark:text-gray-400">
              Customize your AI assistant experience
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Appearance */}

          <SettingCard
            icon={Palette}
            title="Appearance"
            description="Customize interface theme"
          >
            <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3 dark:bg-[#0B0D10]">
              <span className="text-sm">Theme</span>

              <button
                onClick={toggleTheme}
                className="rounded-xl bg-[#8B5CF6] px-4 py-1.5 text-sm text-white transition hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>

            <SettingRow label="Interface" value="AI Cyber Style" />
          </SettingCard>

          {/* AI Preferences */}

          <SettingCard
            icon={Bot}
            title="AI Preferences"
            description="Manage AI response settings"
          >
            <SettingRow label="AI Model" value="Llama AI" />

            <SettingRow label="Response Style" value="Detailed" />
          </SettingCard>

          {/* Voice */}

          <SettingCard
            icon={Mic}
            title="Voice Settings"
            description="Voice assistant controls"
          >
            <SettingRow label="Voice Assistant" value="Coming Soon" />

            <SettingRow label="Language" value="Coming Soon" />
          </SettingCard>

          {/* Chat */}

          <SettingCard
            icon={MessageSquare}
            title="Chat Settings"
            description="Manage conversations"
          >
            <SettingRow label="Save History" value="Enabled" />

            <SettingRow label="Maximum Chats" value="5 Chats" />
          </SettingCard>

          {/* AI Capabilities */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:col-span-2 dark:border-[#252B35] dark:bg-[#11151B]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-[#8B5CF6]/20 p-3 text-[#8B5CF6]">
                <Sparkles size={22} />
              </div>

              <div>
                <h2 className="font-semibold">AI Capabilities</h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Upcoming AI features
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {AI_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-xl border border-gray-200 bg-gray-100 p-4 dark:border-[#252B35] dark:bg-[#0B0D10]"
                >
                  <h3 className="font-medium">{feature.title}</h3>

                  <p className="mt-1 text-xs text-[#8B5CF6]">Coming Soon</p>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}

          <div className="rounded-2xl border border-red-500/30 bg-white p-5 dark:bg-[#11151B]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-red-500/20 p-3 text-red-500">
                <Trash2 size={22} />
              </div>

              <div>
                <h2 className="font-semibold">Danger Zone</h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your stored chats
                </p>
              </div>
            </div>

            <button
              onClick={handleClearChats}
              className="mt-5 w-full rounded-xl bg-red-500 py-2 font-medium text-white transition hover:bg-red-600"
            >
              Clear All Chats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingCard = ({ icon: Icon, title, description, children }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-[#8B5CF6] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] dark:border-[#252B35] dark:bg-[#11151B]">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-[#8B5CF6]/20 p-3 text-[#8B5CF6]">
          <Icon size={22} />
        </div>

        <div>
          <h2 className="font-semibold">{title}</h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
};

const SettingRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3 dark:bg-[#0B0D10]">
      <span className="text-sm">{label}</span>

      <span className="text-sm text-[#8B5CF6]">{value}</span>
    </div>
  );
};

export default Settings;
