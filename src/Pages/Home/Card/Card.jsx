import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import OrderCategory from "../../../component/OrderCategory/OrderCategory";

const Card = () => {
  const [menu] = useMenu();
  const popularData = menu.filter((data) => data.category === "popular");
  
  return (
    <div>
      <SectionTitle heading="chef recommends" subHeading="Should Try" />
      <OrderCategory key={popularData._id} item={popularData} />
    </div>
  );
};

export default Card;
