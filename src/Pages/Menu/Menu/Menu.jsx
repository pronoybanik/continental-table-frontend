import { Helmet } from "react-helmet-async";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import soupsImage from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

import MenuCategory from "../../../component/MenuCategory/MenuCategory";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const offeredData = menu.filter((data) => data.category === "offered");
  const dessertData = menu.filter((data) => data.category === "dessert");
  const saladData = menu.filter((data) => data.category === "salad");
  const pizzaData = menu.filter((data) => data.category === "pizza");
  const soupsData = menu.filter((data) => data.category === "soup");

  return (
    <section>
      <Helmet>
        <title>Continental Table | Menu</title>
      </Helmet>

      {/* Today offer section start */}
      <div>
        <Cover
          bgImage={menuImage}
          title="Our menu"
          subTitle="would you like to try a dish"
        />
        <SectionTitle heading="don't miss" subHeading="to day offer" />
        <MenuCategory item={offeredData} bgImage={menuImage} />
      </div>

      {/* Dessert section start */}
      <div>
        <MenuCategory
          item={dessertData}
          bgImage={dessertImage}
          coverTitle="Dessert"
          coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* Salad section start */}
      <div>
        <MenuCategory
          item={saladData}
          bgImage={saladImage}
          coverTitle="salad"
          coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* Pizza section start */}
      <div>
        <MenuCategory
          item={pizzaData}
          bgImage={pizzaImage}
          coverTitle="pizza"
          coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      {/* Soups section start */}
      <div>
        <MenuCategory
          item={soupsData}
          bgImage={soupsImage}
          coverTitle="soups"
          coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    </section>
  );
};

export default Menu;
