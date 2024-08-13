import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const {
    refetch,
    data: categories = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/categories");
      return res.json();
    },
  });
  return [categories, loading, refetch];
};

export default useCategory;
