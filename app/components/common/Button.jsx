export default function Button({
  children,
  className,
  onClick,
  disabled,
  type,
}) {
  return (
    <button
      aria-label="button"
      className={`${className} font-medium py-1.5 px-2.5 lg:py-2 lg:px-3 rounded-md border`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
