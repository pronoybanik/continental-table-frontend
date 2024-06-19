import bgImage from "../../../assets/home/chef-service.jpg";

const ContinentalInfo = () => {
  return (
    <section className="max-w-screen-xl mx-auto relative">
      <div>
        <img src={bgImage} alt="Chef Service" className="w-full h-auto" />
      </div>

      <div className="bg-white text-center h-64 w-2/3 mx-auto p-6 shadow-lg -mt-80 relative z-10">
        <h1 className="text-4xl font-serif my-4">Continental Table</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  );
};

export default ContinentalInfo;
