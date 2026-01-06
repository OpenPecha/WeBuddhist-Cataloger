import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/atoms/table";
import { IconWrapper } from "../../Icon-wrapper/IconWrapper";
import { LanguagesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/atoms/skeleton";

const LanguageMap = {
  bo: "Tibetan",
  en: "English",
  tibphono: "Spoken Tibetan",
  tib: "Tib-Phono",
};
const SKELETON_ROWS = 10;
const SKELETON_COLS = 3;
export function DashBoardTable({ data, isLoading }: any) {
  const renderTableContent = () => {
    if (isLoading) {
      return Array.from({ length: SKELETON_ROWS }).map((_, rowIndex) => (
        <TableRow key={`skeleton-row-${rowIndex}`}>
          {Array.from({ length: SKELETON_COLS }).map((_, colIndex) => (
            <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
              <Skeleton className=" h-7 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ));
    }

    if (data.length === 0) {
      return (
        <TableRow>
          <TableCell
            colSpan={4}
            className="text-center py-10 text-muted-foreground"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-muted-foreground">Text not found</p>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    return data.map((item: any) => (
      <TableRow key={item.text_id}>
        <TableCell className="cursor-pointer font-monlam text-lg truncate">
          <Link to={`/instance/${item.text_id}`}>
            {item.title.bo || item.title.en || item.title.tib}
          </Link>
        </TableCell>

        <TableCell>{item.type}</TableCell>

        <TableCell>
          <div className="flex items-center gap-2">
            <IconWrapper>
              <LanguagesIcon className="w-4 h-4 text-muted-foreground" />
            </IconWrapper>
            <p className="text-sm text-muted-foreground">
              {LanguageMap[item.language as keyof typeof LanguageMap]}
            </p>
          </div>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Table className="w-full table-fixed bg-white">
      <colgroup>
        <col style={{ width: "70%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
      </colgroup>

      <TableHeader className="bg-sidebar">
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Language</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>{renderTableContent()}</TableBody>
    </Table>
  );
}
