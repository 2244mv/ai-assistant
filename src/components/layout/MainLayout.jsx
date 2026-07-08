// import { Outlet } from "react-router";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import MobileSidebar from "./MobileSidebar";
// import { useSidebar } from "../../hooks/useSidebar";

// const MainLayout = () => {
//   const { isOpen } = useSidebar();

//   return (
//     <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

//       {/* Desktop Sidebar */}
//       <div className="hidden md:block">
//         <Sidebar />
//       </div>

//       {/* Mobile Sidebar Drawer */}
//       <MobileSidebar />

//       {/* Main Area */}
//       <div className="flex flex-col flex-1 overflow-hidden">
//         <Header />

//         <main
//           className={`flex-1 overflow-y-auto transition-all duration-300 ${
//             isOpen ? "md:ml-0" : ""
//           }`}
//         >
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import { useSidebar } from "../../hooks/useSidebar";

const MainLayout = () => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Desktop Sidebar */}
      <div className="hidden md:block h-full">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      <MobileSidebar />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        {/* IMPORTANT: ONLY ONE SCROLL AREA (CHAT INSIDE HERE) */}
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
