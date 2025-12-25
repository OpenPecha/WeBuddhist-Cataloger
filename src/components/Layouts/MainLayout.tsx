import type { ReactNode } from "react";
import Navbar from "../ui/molecules/navbar/Navbar";
import BreadcrumbComponent from "../ui/molecules/all-breadcrumb/BreadcrumbComponent";
import { Separator } from "../ui/atoms/Seperator";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface MainLayoutProps {
  breadcrumbItems: BreadcrumbItem[];
  children: ReactNode;
  searchFieldComponent?: ReactNode;
}

const MainLayout = ({
  breadcrumbItems,
  children,
  searchFieldComponent,
}: MainLayoutProps) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <div className="border-b px-6 py-4 h-14 border-edge flex items-center justify-between">
          <BreadcrumbComponent items={breadcrumbItems} />
          {searchFieldComponent}
        </div>
        <div className="h-10">
          <Separator />
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
