export const Container = ({ children, className }) => {
  return (
    <div className={`container px-6 md:px-0 ${className}`}>{children}</div>
  );
};
