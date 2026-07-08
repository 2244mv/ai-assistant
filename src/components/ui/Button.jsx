import clsx from "clsx";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-md text-sm font-medium transition active:scale-95",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" &&
          "bg-gray-200 text-black dark:bg-gray-700 dark:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
