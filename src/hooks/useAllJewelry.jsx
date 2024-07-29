import { useQuery } from "@tanstack/react-query";

const useAllJewelry = () => {
    const {
        refetch,
        data: allJewelry = [],
        isLoading: loading,
    } = useQuery({
        queryKey: ["allJewelry"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5000/api/jewelrys"
            );
            return res.json();
        },
    });
    return [allJewelry, loading, refetch];
};

export default useAllJewelry;