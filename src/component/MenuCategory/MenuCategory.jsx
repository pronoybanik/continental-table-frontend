import { Link } from "react-router-dom";
import Cover from "../../Pages/Shared/Cover/Cover";
import PrimaryButton from "../../Pages/Shared/PrimaryButton/PrimaryButton";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ item, bgImage, coverTitle, coverSubTitle }) => {
  return (
    <section>
      {coverTitle && (
        <Cover bgImage={bgImage} title={coverTitle} subTitle={coverSubTitle} />
      )}
      <div className="grid lg:grid-cols-2 my-10 gap-4 max-w-screen-xl mx-auto">
        {item?.map((data) => (
          <MenuItem key={data?._id} item={data} />
        ))}
      </div>

      <Link to={`/order/${coverTitle}`} className="flex justify-center my-6">
        {coverTitle && <PrimaryButton name={`Order ${coverTitle}`} />}
      </Link>
    </section>
  );
};

export default MenuCategory;
