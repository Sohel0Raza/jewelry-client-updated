import { useEffect, useState } from "react";
import AllCard from "../../components/AllCard";
import Title from "../../components/Title";
import useAllJewelry from "../../hooks/useAllJewelry";
import useCategory from "../../hooks/useCategory";

const AllJewelry = () => {
  const [categories, ctLoading] = useCategory();
  const [allJewelry, loading, refetch] = useAllJewelry();
  console.log("✌️refetch --->", refetch);
  console.log("✌️allJewelry --->", allJewelry);

  const [activeCategoryId, setActiveCategoryId] = useState("");

  const [jewelries, setJewelries] = useState(allJewelry);
  useEffect(() => {
    setJewelries(allJewelry);
  }, [loading]);

  console.log("✌️jewelries --->", jewelries);

  if (loading || ctLoading) {
    return (
      <div className="relative">
        <div className="flex justify-center py-40">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
        <p className="text-center absolute top-[40%] left-[48%] md:mt-20 text-xl">
          Loading...
        </p>
      </div>
    );
  }

  const handelFilter = (categoryId) => {
    setActiveCategoryId(categoryId);

    const jewelryByCategory = allJewelry?.filter(
      (jewelry) => jewelry.categoryId == categoryId
    );
    setJewelries(jewelryByCategory);
  };

  const handelClickAll = () => {
    setJewelries(allJewelry);
    setActiveCategoryId("");
  };

  return (
    <div className="pt-24 md:px-20 mb-10">
      <Title heading={"All Jewelry"}></Title>
      <div className="grid grid-cols-4 md:grid-cols-10">
        <button
          onClick={() => handelClickAll()}
          className={`md:mx-6 md:mb-7 ${
            activeCategoryId == "" ? "text-[#bd2c2e]" : ""
          }`}
        >
          All
        </button>
        {categories?.map((category, index) => (
          <button
            onClick={() => handelFilter(category._id)}
            className={`md:mx-5 md:mb-7  ${
              category._id == activeCategoryId ? "text-[#bd2c2e]" : ""
            }`}
            key={index}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 md:px-0">
        {jewelries?.map((item) => (
          <AllCard key={item._id} item={item}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllJewelry;
