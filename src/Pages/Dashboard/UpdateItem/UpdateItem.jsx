import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const image_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();

  const { name, category, recipe, price, _id } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="update item"
        subHeading="refetch info"
      ></SectionTitle>

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto w-2/3 shadow-xl p-8 bg-[#F3F3F3] mt-20"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">
                  Product Category*
                </span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text font-bold">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              defaultValue={recipe}
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <div>
            <input
              {...register("image", { required: false })}
              type="file"
              className="file-input my-4 file-input-bordered file-input-sm w-full max-w-xs"
            />
          </div>

          <div>
            <PrimaryButton name="update Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
