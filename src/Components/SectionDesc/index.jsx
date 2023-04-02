export const SectionDesc = ({ sTitle, sDesc }) => {
  return (
    <>
      <div className="flex flex-col gap-5 my-12 py-5 justify-center text-center">
        <h1 className="max-w-[617px] mx-auto font-medium text-4xl leading-[47px] text-black font-dms">
          {sTitle}
        </h1>
        <p className="max-w-[557px] mx-auto font-normal text-base text-black/[.6] font-intr">
          {sDesc}
        </p>
      </div>
    </>
  );
};
