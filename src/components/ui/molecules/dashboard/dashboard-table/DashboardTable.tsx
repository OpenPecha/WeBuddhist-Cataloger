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
};

export function DashBoardTable({ data, isLoading }: any) {
  const renderTableContent = () => {
    if (isLoading) {
      return (
        <TableRow>
          {Array.from({ length: 3 }).map((_, index) => (
            <TableCell key={index}>
              <Skeleton className="h-10 w-full" />
            </TableCell>
          ))}
        </TableRow>
      );
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
        <TableCell className="cursor-pointer">
          <Link to={`/instance/${item.text_id}`}>
            <div className="text-lg font-monlam max-w-0">
              {item.title.bo || item.title.en}
            </div>
          </Link>
        </TableCell>

        <TableCell>Root Text</TableCell>

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
