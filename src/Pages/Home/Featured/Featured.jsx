import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-20 my-20 text-white"
      style={{ backgroundImage: `url(${featuredImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <SectionTitle heading="from our menu" subHeading="check it out" />

        <div className="flex gap-4 items-center max-w-screen-lg mx-auto my-8">
          <img
            src={featuredImage}
            alt="Featured Dish"
            className="w-2/3 h-80 object-cover"
          />

          <div className="max-w-screen-md">
            <p className="text-xl font-medium my-4">
              March 20, 2023 <br /> WHERE CAN I GET SOME?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline text-white border-0 border-b-2 mt-2">
              order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
