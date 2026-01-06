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
import { Skeleton } from "@/components/ui/atoms/skeleton";
import { LanguageMap } from "@/lib/constants";

export function TextDetailDashboard({ data, isLoading }: any) {
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
            colSpan={3}
            className="text-center py-10 text-muted-foreground"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-muted-foreground">No Alignemnts Found</p>
            </div>
          </TableCell>
        </TableRow>
      );
    }

    return data.map((item: any, index: number) => (
      <TableRow key={index}>
        <TableCell>
          <div className="text-lg font-monlam max-w-0">
            {item.metadata.title.tibphono ||
              item.metadata.title.bo ||
              item.metadata.title.en ||
              item.metadata.title.tib}
          </div>
        </TableCell>

        <TableCell className="capitalize">{item.relation_type}</TableCell>

        <TableCell>
          <div className="flex items-center gap-2">
            <IconWrapper>
              <LanguagesIcon className="w-4 h-4 text-muted-foreground" />
            </IconWrapper>
            <p className="text-sm text-muted-foreground">
              {LanguageMap[item.metadata.language as keyof typeof LanguageMap]}
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
          <TableHead>Relationship</TableHead>
          <TableHead>Language</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>{renderTableContent()}</TableBody>
    </Table>
  );
}
