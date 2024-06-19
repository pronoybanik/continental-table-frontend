const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto text-center ">
      <h2 className="text-[#D99904]">--- {subHeading} ---</h2>
      <h1 className="text-black text-3xl border-y-2 mt-2 uppercase py-2">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
