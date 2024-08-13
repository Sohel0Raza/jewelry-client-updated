import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../components/Title";

const UpdateJewelry = () => {
  const jewelry = useLoaderData()
console.log('✌️jewelry --->', jewelry);

  const navigate = useNavigate();
  const from = "/myJewelry";

  const { _id, name, price, weight, description } = jewelry;
console.log('✌️name --->', name);

  const handleUpdateJewelry = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.jewelryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const weight = form.weight.value;
    const updatedJewelry = { name, price, weight, description };

    fetch(
      `http://localhost:5000/api/jewelrys/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedJewelry),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Jewelry Update Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        navigate(from, { replacer: true });
      });
  };
  return (
    <div className="md:w-4/12 mx-auto pt-24 mb-10">
      <Title heading={"Update Jewelry"}></Title>
      <form onSubmit={handleUpdateJewelry} className="shadow-xl p-8">
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
            name="jewelryName"
            defaultValue={name}
            required="required"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Price UDS:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="price"
            defaultValue={price}
            required="required"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Weight:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="weight"
            defaultValue={weight}
            required="required"
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
            defaultValue={description}
            required="required"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn-secondary px-4">
            Update Jewelry
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJewelry;
