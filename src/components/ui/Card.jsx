import clsx from "clsx";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 border dark:border-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
