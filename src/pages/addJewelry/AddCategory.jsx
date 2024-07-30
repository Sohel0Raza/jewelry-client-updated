import Title from "../../components/Title";

const AddCategory = () => {
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const newCategory = { category };
    fatch("http://localhost:5000/", {
      method: "POST",
      headers: { "content-type": "aplication/json" },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Category Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
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
    <div className="my-12  md:px-20">
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
