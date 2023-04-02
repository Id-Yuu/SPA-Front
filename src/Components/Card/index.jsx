export const Card = ({ children, bground }) => {
  return (
    <div
      className={`flex flex-col gap-3 justify-normal p-[30px] items-start max-w-[360px] shadow-md rounded-[10px] ${bground}`}
    >
      {children}
    </div>
  );
};
