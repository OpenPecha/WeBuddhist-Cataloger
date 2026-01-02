import { useParams } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";
import { TextDetailDashboard } from "@/components/ui/molecules/dashboard/textdetail-table/TextDetailDashboard";
import { Separator } from "@/components/ui/atoms/Seperator";
import { Button } from "@/components/ui/atoms/button";
import axiosInstance from "@/config/axios-config";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getReadableAxiosError } from "@/lib/error";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/atoms/select";
import { Loader2Icon, MoveRightIcon, RotateCcw } from "lucide-react";
import { Skeleton } from "@/components/ui/atoms/skeleton";
export const FetchTextDetailInfo = async (textId: string) => {
  const { data } = await axiosInstance.get(`/api/v1/cataloger/texts/${textId}`);
  return data;
};

const Instance = () => {
  const { id } = useParams();
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

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

  const { mutate: synxText, isPending } = useMutation({
    mutationFn: () => {
      return axiosInstance.post(`/api/v1/upload-text/texts/${id}`, {
        textId: id,
        source,
        destination,
      });
    },
    onSuccess: () => {
      toast.success("Text will be uploaded to WeBuddhist within 24 hours");
    },
    onError: (error) => {
      const info = getReadableAxiosError(error);
      toast.error(info.title, {
        description: info.detail,
        duration: 5000,
      });
    },
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
        <div className="flex flex-col items-start gap-4 p-4">
          <span className="text-2xl font-monlam">
            {textdata?.title.en || textdata?.title.bo || (
              <Skeleton className=" w-md h-8" />
            )}{" "}
          </span>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Pecha Server:</p>
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="test">Test</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <MoveRightIcon className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-muted-foreground">WeBuddhist:</p>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="test">Test</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => synxText()}
              disabled={!source || !destination || textdata?.status || error || isPending}
            >
              {isPending ? <Loader2Icon className="w-4 h-4 animate-spin" /> : <RotateCcw className="w-4 h-4" />}
              Sync
            </Button>
          </div>
        </div>
        <div className="text-xl p-4">Alignments</div>
        <div className="flex">
          <div className="w-4 h-full">
            <Separator />
          </div>
          <div className="flex-1 max-h-[calc(100vh-15rem)] border border-edge overflow-y-auto">
            <TextDetailDashboard
              isLoading={isLoading}
              data={textdata?.relations || []}
            />
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
