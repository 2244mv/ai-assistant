import { MessageSquare, Zap, Sparkles, Settings } from "lucide-react";

const features = [
  {
    title: "Ask Anything",
    desc: "Get answers to any question",
    icon: MessageSquare,
    action: "ask",
  },
  {
    title: "Code Help",
    desc: "Fix or generate code instantly",
    icon: Zap,
    action: "code",
  },
  {
    title: "Explain Topic",
    desc: "Learn anything in simple words",
    icon: Sparkles,
    action: "explain",
  },
  {
    title: "Project Ideas",
    desc: "Get unique project suggestions",
    icon: Settings,
    action: "ideas",
  },
];

const FeatureCards = ({ onAction }) => {
  return (
    <div className="flex items-center justify-center h-full p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                onClick={() => onAction(item.action)}
                className="group cursor-pointer p-5 rounded-xl border dark:border-gray-700
                bg-gray-50 dark:bg-gray-900
                hover:scale-[1.04] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white dark:bg-gray-800 group-hover:bg-blue-600 transition">
                    <Icon className="text-gray-700 dark:text-white group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
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
