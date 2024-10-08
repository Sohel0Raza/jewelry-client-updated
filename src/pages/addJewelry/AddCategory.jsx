import Swal from "sweetalert2";
import Title from "../../components/Title";

const AddCategory = () => {
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.category.value;
    const category = { name };

    fetch("https://jewelry-shop-server-main.vercel.app/api/categories", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          Swal.fire({
            title: "Success!",
            text: "New Category Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: `${data.message}`,
          });
        }
        form.reset();
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
    <div className="pt-24 md:px-20 mb-10">
      <Title heading={"Add Category"}></Title>
      <div>
        <form
          onSubmit={handleAddCategory}
          className="shadow-xl p-10 rounded-md md:w-10/12 mx-auto"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Jewelry Category:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="category"
              required="required"
            />
          </div>
          <div className="text-center md:mt-10">
            <button type="submit" className="btn-secondary px-4">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCategory;
