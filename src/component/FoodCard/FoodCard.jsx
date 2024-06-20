import PrimaryButton from "../../Pages/Shared/PrimaryButton/PrimaryButton";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute bg-black text-white px-2 py-1 text-sm right-0 mt-4 mr-4 font-medium rounded-md">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-2xl  font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <PrimaryButton name="add ot card" />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
