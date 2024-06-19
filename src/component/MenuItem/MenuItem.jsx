const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex gap-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[90px]"
        src={image}
        alt=""
      />
      <div>
        <h1 className="text-xl font-serif font-medium">{name}--------</h1>
        <h1 className="text-sm">{recipe}</h1>
      </div>
      <p className="text-[#D99904]"> ${price}</p>
    </div>
  );
};

export default MenuItem;
