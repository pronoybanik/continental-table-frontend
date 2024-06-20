
const PrimaryButton = ({ name }) => {
  return (
    <div>
      <button className="btn border-b-2 font-semibold border-b-[#D99904] px-8 text-[#D99904] uppercase hover:bg-black tran transition duration-700 ease-in-out">
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
