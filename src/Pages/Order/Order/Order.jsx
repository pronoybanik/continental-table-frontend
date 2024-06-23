import Cover from "../../Shared/Cover/Cover";
import orderImage from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/useMenu";
import { useState } from "react";
import OrderCategory from "../../../component/OrderCategory/OrderCategory";

const Order = () => {
  const [menu] = useMenu();
  const [orderValue, setOrderValue] = useState("pizza");
  const dessertData = menu.filter((data) => data.category === "dessert");
  const saladData = menu.filter((data) => data.category === "salad");
  const pizzaData = menu.filter((data) => data.category === "pizza");
  const soupsData = menu.filter((data) => data.category === "soup");
  const drinksData = menu.filter((data) => data.category === "drinks");
  console.log("cick one", orderValue);

  let foodData;

  if (orderValue === "salad") {
    console.log("clink salad");
    foodData = <OrderCategory item={saladData} />;
  } else if (orderValue === "desserts") {
    console.log("clink desserts");
    foodData = <OrderCategory item={dessertData} />;
  } else if (orderValue === "pizza") {
    console.log("clink pizza");
    foodData = <OrderCategory item={pizzaData} />;
  } else if (orderValue === "soups") {
    console.log("clink soups");
    foodData = <OrderCategory item={soupsData} />;
  } else if (orderValue === "drinks") {
    foodData = <OrderCategory item={drinksData} />;
  }

  return (
    <section>
      <Helmet>
        <title>Continental Table | Order Food</title>
      </Helmet>

      <Cover
        bgImage={orderImage}
        title="Our shop"
        subTitle="would you like to try any dish"
      />

      <div>
        <div
          role="tablist"
          className="tabs tabs-bordered my-4 max-w-screen-md mx-auto"
        >
          <a
            onClick={() => setOrderValue("salad")}
            role="tab"
            className={
              orderValue === "salad"
                ? "tab tab-active font-semibold"
                : "tab font-semibold"
            }
          >
            Salad
          </a>
          <a
            onClick={() => setOrderValue("desserts")}
            role="tab"
            className={
              orderValue === "desserts"
                ? "tab tab-active font-semibold"
                : "tab font-semibold"
            }
          >
            Desserts
          </a>
          <a
            onClick={() => setOrderValue("pizza")}
            role="tab"
            className={
              orderValue === "pizza"
                ? "tab tab-active font-semibold"
                : "tab font-semibold"
            }
          >
            Pizza
          </a>
          <a
            onClick={() => setOrderValue("soups")}
            role="tab"
            className={
              orderValue === "soups"
                ? "tab tab-active font-semibold"
                : "tab font-semibold"
            }
          >
            Soups
          </a>
          <a
            onClick={() => setOrderValue("drinks")}
            role="tab"
            className={
              orderValue === "drinks"
                ? "tab tab-active font-semibold"
                : "tab font-semibold"
            }
          >
            Drinks
          </a>
        </div>
      </div>

      <div>{foodData}</div>
    </section>
  );
};

export default Order;
