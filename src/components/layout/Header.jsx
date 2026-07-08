import { Menu } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";
import ThemeToggle from "../common/ThemeToggle";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-14 flex items-center justify-between px-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Mobile menu */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <Menu />
      </button>

      <h1 className="font-semibold">AI Chat</h1>

      <ThemeToggle />
    </header>
  );
};

export default Header;
