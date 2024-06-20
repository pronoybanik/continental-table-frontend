import FoodCard from "../FoodCard/FoodCard";

const OrderCategory = ({ item }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-4 max-w-screen-xl mx-auto">
        {item?.map((data) => (
          <FoodCard key={data?._id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default OrderCategory;
