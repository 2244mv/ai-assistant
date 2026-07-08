import clsx from "clsx";

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-700",
        active && "bg-gray-200 dark:bg-gray-700",
      )}
    >
      <span>{icon}</span>

      <span className="text-sm truncate">{label}</span>
    </div>
  );
};

export default SidebarItem;
