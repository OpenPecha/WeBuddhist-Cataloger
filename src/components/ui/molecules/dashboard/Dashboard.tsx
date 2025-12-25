import { Separator } from "../../atoms/Seperator";
import { DashBoardTable } from "./dashboard-table/DashboardTable";
import SearchField from "../search/SearchField";
import { PaginationComponent } from "../all-pagination/PaginationComponent";
import { useEffect, useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import axiosInstance from "@/config/axios-config";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { getReadableAxiosError } from "@/lib/error";
import { toast } from "sonner";

export const FetchTextInfo = async (
  search: string,
  currentPage: number,
  limit: number,
) => {
  const skip = (currentPage - 1) * limit;
  const { data } = await axiosInstance.get(`/api/v1/cataloger/texts`, {
    params: {
      skip,
      limit,
      ...(search && { search }),
    },
  });
  return data;
};

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const limit = 10;
  const {
    data: textmaindata,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["textinfo", debouncedSearch, currentPage],
    queryFn: () => FetchTextInfo(debouncedSearch, currentPage, limit),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const totalPages = textmaindata ? Math.ceil(textmaindata.length / limit) : 1; // should be data.total but total is not send by backend
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/" },
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
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      searchFieldComponent={<SearchField value={search} onChange={setSearch} />}
    >
      <div className="flex">
        <div className="w-4 h-full">
          <Separator />
        </div>
        <div className="flex-1 max-h-[calc(100vh-15rem)] border border-edge overflow-y-auto">
          <DashBoardTable isLoading={isLoading} data={textmaindata || []} />
        </div>
        <div className="w-4 h-full">
          <Separator />
        </div>
      </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </MainLayout>
  );
};

export default Dashboard;
