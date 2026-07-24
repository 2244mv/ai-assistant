import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import MobileBottomNav from "./MobileBottomNav";

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f7f8] text-gray-900 dark:bg-[#0B0D10] dark:text-white">
      {/* Desktop Sidebar */}

      <div className="hidden h-full md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}

      <MobileSidebar />

      {/* Main Content */}

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-hidden pb-14 md:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}

      <MobileBottomNav />
    </div>
  );
};

export default MainLayout;
