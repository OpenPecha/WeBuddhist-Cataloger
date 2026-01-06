import React from "react";
import { PaginationNext, PaginationPrevious } from "../../atoms/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  isLastPage: boolean;
  hasData: boolean;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  isLastPage,
  hasData,
  onPageChange,
  className = "",
}) => {
  return (
    <div
      className={cn("flex p-4 w-full items-center justify-between ", className)}
    >
      <div className="text-sm text-muted-foreground">
        Page <span className=" text-black">{currentPage}</span>
        {!hasData && currentPage === 1 && " (No data)"}
      </div>
      <div className="flex items-center space-x-2">
        <PaginationPrevious
          onClick={(e) => {
            e.preventDefault();
            onPageChange(Math.max(1, currentPage - 1));
          }}
          className={
            currentPage === 1
              ? "pointer-events-none opacity-50"
              : "cursor-pointer"
          }
        />

        <PaginationNext
          onClick={(e) => {
            e.preventDefault();
            onPageChange(currentPage + 1);
          }}
          className={
            isLastPage || !hasData
              ? "pointer-events-none opacity-50"
              : "cursor-pointer"
          }
        />
      </div>
    </div>
  );
};
