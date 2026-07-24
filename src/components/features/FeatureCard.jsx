import { Sparkles } from "lucide-react";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  const handleClick = () => {
    if (feature.status === "coming-soon") {
      alert(`${feature.title} is coming soon 🚀`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:scale-[1.03] hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] dark:border-[#252B35] dark:bg-[#11151B]"
    >
      {/* Header */}

      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-xl bg-[#8B5CF6]/20 p-3 text-[#8B5CF6] transition group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          <Icon size={24} />
        </div>

        <span className="flex items-center gap-1 rounded-full bg-[#8B5CF6]/10 px-3 py-1 text-xs text-[#8B5CF6]">
          <Sparkles size={12} />
          Coming Soon
        </span>
      </div>

      {/* Content */}

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
