import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../../component/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((data) => data.category === "popular");
        setMenu(popularData);
      });
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <SectionTitle
        heading="From our menu"
        subHeading="popular item"
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 ">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
