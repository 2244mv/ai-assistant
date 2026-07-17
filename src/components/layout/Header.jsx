import { Menu } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";
import ThemeToggle from "../common/ThemeToggle";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 text-gray-900 dark:border-[#252B35] dark:bg-[#0B0D10] dark:text-white">
      {/* Mobile Menu */}
      <button
        onClick={toggleSidebar}
        className="rounded-xl p-2 transition hover:bg-gray-100 hover:text-[#8B5CF6] md:hidden dark:hover:bg-[#11151B]"
      >
        <Menu size={20} />
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold tracking-wide">AI Chat</h1>

      {/* Theme */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
