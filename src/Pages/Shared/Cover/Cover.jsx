import { Parallax } from "react-parallax";

const Cover = ({ bgImage, title, subTitle }) => {

  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgImage}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero h-[600px]"
          style={{ backgroundImage: `url("${bgImage}")` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl text-white">
              <h1 className="mb-5 text-6xl font-serif uppercase font-bold">
                {title}
              </h1>
              <p className="mb-5 font-serif uppercase ">{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
