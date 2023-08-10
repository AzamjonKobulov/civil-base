export default function ButtonWithIcon({
  children,
  className,
  onClick,
  disabled,
  type,
}) {
  return (
    <button
      aria-label="button"
      className={`${className} flex items-center font-medium space-x-2 py-2 px-3 rounded-md border`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
