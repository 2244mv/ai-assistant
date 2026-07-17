import { X } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 transform bg-white transition-transform duration-300 md:hidden dark:bg-[#0B0D10] ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-3 right-3 z-50 rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-[#11151B]"
        >
          <X size={20} />
        </button>

        <Sidebar />
      </div>
    </>
  );
};

export default MobileSidebar;
