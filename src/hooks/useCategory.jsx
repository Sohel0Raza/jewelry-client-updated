import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const {
    refetch,
    data: categories = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://jewelry-shop-server-main.vercel.app/api/categories");
      return res.json();
    },
  });
  return [categories, loading, refetch];
};

export default useCategory;
