import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import useCategory from "../../hooks/useCategory";
import useAllJewelry from "../../hooks/useAllJewelry";

const AddJewelry = () => {
  const { user } = useContext(AuthContext);
  const [categories] = useCategory();
  const [,, refetch] = useAllJewelry();
  const navigate = useNavigate();

  const MaterialEnum = {
    Gold24K: "Gold 24K",
    Gold18K: "Gold 18K",
    Gold14K: "Gold 14K",
    Gold10K: "Gold 10K",
    Silver: "Silver",
    Platinum: "Platinum",
    WhiteGold: "White Gold",
    RoseGold: "Rose Gold",
  };

  const handleAddJewelry = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const material = form.material.value;
    const categoryId = form.category.value;
    const weight = form.weight.value;
    const itemAvailability = form.itemAvailability.checked;
    const price = parseFloat(form.price.value);
    const sellerEmail = form.sellerEmail.value;
    const sellerName = form.sellerName.value;
    const description = form.description.value;
    const newJewelry = {
      sellerName,
      sellerEmail,
      name,
      categoryId,
      image,
      price,
      material,
      weight,
      itemAvailability,
      description,
    };

    fetch("https://jewelry-shop-server-main.vercel.app/api/jewelrys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJewelry),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          Swal.fire({
            title: "Success!",
            text: "New Jewelry Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset()
        } else {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: `${data.message}`,
          });
        }
      })
      .catch((error) => {
        form.reset();
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: `${error}`,
          });
        }
      });
  };

  return (
    <div>
      <div className="pt-24 md:px-20 mb-10">
        <Title heading={"Add New Products"}></Title>
        <div>
          <form
            onSubmit={handleAddJewelry}
            className="shadow-xl p-10 rounded-md md:w-10/12 mx-auto"
          >
            <div className=" flex justify-center">
              <div className="w-full md:mr-10">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Jewelry Name:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Images Url:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="image"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="priority"
                  >
                    Material:
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="material"
                  >
                    <option disabled selected value="">
                      Select Material
                    </option>
                    <option value={MaterialEnum.Gold24K}>
                      {MaterialEnum.Gold24K}
                    </option>
                    <option value={MaterialEnum.Gold18K}>
                      {MaterialEnum.Gold18K}
                    </option>
                    <option value={MaterialEnum.Gold14K}>
                      {MaterialEnum.Gold14K}
                    </option>
                    <option value={MaterialEnum.Gold10K}>
                      {MaterialEnum.Gold10K}
                    </option>
                    <option value={MaterialEnum.Silver}>
                      {MaterialEnum.Silver}
                    </option>
                    <option value={MaterialEnum.Platinum}>
                      {MaterialEnum.Platinum}
                    </option>
                    <option value={MaterialEnum.WhiteGold}>
                      {MaterialEnum.WhiteGold}
                    </option>
                    <option value={MaterialEnum.RoseGold}>
                      {MaterialEnum.RoseGold}
                    </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Weight (gm):
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="weight"
                    placeholder="Weight Gram"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Availability:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      name="itemAvailability"
                    />
                    <span className="ml-2 text-gray-700">In Stock</span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="priority"
                  >
                    Cotegory:
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="category"
                  >
                    <option disabled selected value="">
                      Select Category
                    </option>
                    {categories?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Price USD$:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="price"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Supplier Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    name="sellerEmail"
                    value={user?.email}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Supplier Name:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="sellerName"
                    value={user?.displayName}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="description"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-secondary px-4">
                Add Jewelry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJewelry;
