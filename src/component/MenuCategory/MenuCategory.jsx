import Cover from "../../Pages/Shared/Cover/Cover";
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
    </section>
  );
};

export default MenuCategory;
