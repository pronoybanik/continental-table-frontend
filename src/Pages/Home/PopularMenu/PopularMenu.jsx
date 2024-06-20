import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../../component/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularData = menu.filter((data) => data.category === "popular");

  return (
    <section className="max-w-screen-xl mx-auto mt-32 mb-20">
      <SectionTitle
        heading="From our menu"
        subHeading="popular item"
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 ">
        {popularData?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
