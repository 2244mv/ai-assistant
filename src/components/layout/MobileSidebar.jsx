import { useSidebar } from "../../hooks/useSidebar";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default MobileSidebar;
