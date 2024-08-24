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
                "https://jewelry-shop-server-main.vercel.app/api/jewelrys"
            );
            return res.json();
        },
    });
    return [allJewelry, loading, refetch];
};

export default useAllJewelry;