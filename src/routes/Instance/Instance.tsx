import { useParams } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";
import { TextDetailDashboard } from "@/components/ui/molecules/dashboard/textdetail-table/TextDetailDashboard";
import { Separator } from "@/components/ui/atoms/Seperator";
import { Button } from "@/components/ui/atoms/button";
import axiosInstance from "@/config/axios-config";
import { useQuery } from "@tanstack/react-query";
import { getReadableAxiosError } from "@/lib/error";
import { toast } from "sonner";
import { useEffect } from "react";

export const FetchTextDetailInfo = async (textId: string) => {
    const { data } = await axiosInstance.get(`/api/v1/texts/${textId}`);
    return data;
};

const Instance = () => {
    const { id } = useParams();

    const {
        data: textdata,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["textdetail", id],
        queryFn: () => FetchTextDetailInfo(id as string),
        enabled: !!id,
        retry: false,
        refetchOnWindowFocus: false,
    });

    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Dashboard", path: "/" },
        { label: "Text Details", path: `/instance/${id}` },
    ];

    useEffect(() => {
        if (isError && error) {
            const info = getReadableAxiosError(error);
            toast.error(info.title, {
                description: info.detail,
                duration: 5000,
                action: {
                    label: "Retry",
                    onClick: () => {
                        void refetch();
                    },
                },
            });
        }
    }, [isError, error, refetch]);

    return (
        <MainLayout breadcrumbItems={breadcrumbItems}>
            <div className="flex flex-col w-full h-full border-t border-edge">
                <div className="flex items-center gap-2 p-4">
                    <span className="text-2xl font-monlam">{textdata?.title.en || textdata?.title.bo || <div className="w-4 h-4 bg-gray-500" />} </span>
                    <Button variant="outline" className="cursor-pointer" disabled={textdata?.status || error}>
                        Trigger Bulk Upload
                    </Button>
                </div>
                <div className="text-xl p-4">Alignment</div>
                <div className="flex">
                    <div className="w-4 h-full">
                        <Separator />
                    </div>
                    <div className="flex-1 max-h-[calc(100vh-15rem)] border border-edge overflow-y-auto">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-40">
                                <div className="text-sm opacity-60">Loading text details...</div>
                            </div>
                        ) : (
                            <TextDetailDashboard data={textdata?.relations || []} />
                        )}
                    </div>
                    <div className="w-4 h-full">
                        <Separator />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Instance;
