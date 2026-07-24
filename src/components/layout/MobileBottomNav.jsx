import { Home, Sparkles } from "lucide-react";
import { NavLink } from "react-router";

import { ROUTES } from "../../routes/router";

const MobileBottomNav = () => {
  const linkClass = ({ isActive }) =>
    `flex flex-1 flex-col items-center justify-center gap-1 text-xs transition ${
      isActive ? "text-[#8B5CF6]" : "text-gray-500 dark:text-gray-400"
    }`;

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-30 flex h-14 border-t border-gray-200 bg-white md:hidden dark:border-[#252B35] dark:bg-[#0B0D10]">
      <NavLink to={ROUTES.HOME} className={linkClass}>
        <Home size={20} />
        Home
      </NavLink>

      <NavLink to={ROUTES.FEATURES} className={linkClass}>
        <Sparkles size={20} />
        Features
      </NavLink>
    </nav>
  );
};

export default MobileBottomNav;
