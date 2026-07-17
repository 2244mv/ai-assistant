import { MessageSquare, Zap, Sparkles, Settings } from "lucide-react";

const features = [
  {
    title: "Explain React Hooks",
    desc: "Learn useState, useEffect and custom hooks",
    icon: MessageSquare,
    action: "react-hooks",
  },

  {
    title: "Fix React Bug",
    desc: "Debug your React code quickly",
    icon: Zap,
    action: "react-bug",
  },

  {
    title: "React Project Ideas",
    desc: "Get modern React project ideas",
    icon: Sparkles,
    action: "react-projects",
  },

  {
    title: "React Interview Prep",
    desc: "Practice React interview questions",
    icon: Settings,
    action: "react-interview",
  },
];

const FeatureCards = ({ onAction }) => {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-[#252B35] dark:bg-[#11151B]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => onAction(item.action)}
                className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:scale-[1.03] hover:border-purple-400 hover:bg-purple-50 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] dark:border-[#252B35] dark:bg-[#0B0D10] dark:hover:border-purple-500 dark:hover:bg-[#211538]"
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}

                  <div className="rounded-lg bg-gray-100 p-2 transition group-hover:bg-[#8B5CF6] dark:bg-[#1A2029]">
                    <Icon
                      className="text-gray-700 transition group-hover:text-white dark:text-gray-200"
                      size={20}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
