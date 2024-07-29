import { useEffect, useState } from "react";
import AllCard from "../../components/AllCard";
import Title from "../../components/Title";
import useAllJewelry from "../../hooks/useAllJewelry";
import { CategoryEnum } from "../addJewelry/AddJewelry";
const AllJewelry = () => {
  const categoryArray = Object.values(CategoryEnum).map((category) => ({
    name: category,
    isActive: false,
  }));

  const [allJewelry, loading] = useAllJewelry();
  const [jewelrys, setJewelrys] = useState(allJewelry);
  const [categoryList, setCategoryList] = useState(categoryArray);
  const [activeAll, setActiveAll] = useState(true);

  useEffect(() => {
    setJewelrys(allJewelry);
  }, [loading]);

  const handelClickAll = () => {
    setJewelrys(allJewelry);

    const allCategory = categoryList?.map((item) => {
      return item.isActive ? { ...item, isActive: false } : item;
    });

    setActiveAll(true);

    setCategoryList(allCategory);
  };

  const filterItem = (category, activedIndex) => {
    const updatedCategory = categoryList.map((category, index) => {
      return index == activedIndex
        ? { ...category, isActive: true }
        : { ...category, isActive: false };
    });

    setActiveAll(false);

    setCategoryList(updatedCategory);

    const newItem = allJewelry?.filter((item) => item.category === category);
    setJewelrys(newItem);
  };

  if (loading) {
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
  return (
    <div className="pt-24 md:px-20 mb-10">
      <Title heading={"All Jewelry"}></Title>
      <div className="grid grid-cols-4 md:grid-cols-10">
        <button
          onClick={() => handelClickAll()}
          className={`md:mx-6 md:mb-7 ${
            activeAll ? "text-[#bd2c2e]" : ""
          }`}
        >
          All
        </button>
        {categoryList?.map((category, index) => (
          <button
            onClick={() => filterItem(category.name, index)}
            className={`md:mx-5 md:mb-7  ${
              category.isActive ? "text-[#bd2c2e]" : ""
            }`}
            key={index}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 md:px-0">
        {jewelrys?.map((item) => (
          <AllCard key={item._id} item={item}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllJewelry;
