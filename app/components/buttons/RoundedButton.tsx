export function RoundedButton({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`font-bold py-2 px-4 rounded inline-flex items-center pointer-events-auto ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}