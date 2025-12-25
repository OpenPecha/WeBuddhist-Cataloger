import { useParams } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";
import { TextDetailDashboard } from "@/components/ui/molecules/dashboard/textdetail-table/TextDetailDashboard";
import { Separator } from "@/components/ui/atoms/Seperator";
import { Button } from "@/components/ui/atoms/button";
import axiosInstance from "@/config/axios-config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getReadableAxiosError } from "@/lib/error";

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

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    if (isError) {
        const info = getReadableAxiosError(error);

        return (
            <div className="flex flex-col items-center justify-center h-screen gap-3 px-6 text-center">
                <div className="text-lg font-semibold">{info.title}</div>
                <div className="text-sm opacity-80">{info.detail}</div>

                {axios.isAxiosError(error) && (
                    <pre className="mt-2 max-w-2xl overflow-auto rounded border p-3 text-left text-xs opacity-80">
                        {JSON.stringify(
                            {
                                url: error.config?.url,
                                method: error.config?.method,
                                status: error.response?.status,
                                data: error.response?.data,
                                code: error.code,
                            },
                            null,
                            2
                        )}
                    </pre>
                )}

                <Button variant="outline" onClick={() => refetch()}>
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <MainLayout breadcrumbItems={breadcrumbItems}>
            <div className="flex flex-col w-full h-full border-t border-edge">
                <div className="flex items-center gap-2 p-4">
                    <p className="text-2xl font-monlam">དཔལ་ལྡན་ས་གསུམ་མ།</p>
                    <Button variant="outline" className="cursor-pointer">
                        Trigger Bulk Upload
                    </Button>
                </div>
                <div className="text-xl p-4">Alignment</div>
                <div className="flex">
                    <div className="w-4 h-full">
                        <Separator />
                    </div>
                    <div className="flex-1 max-h-[calc(100vh-15rem)] border border-edge overflow-y-auto">
                        <TextDetailDashboard data={textdata} />
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
