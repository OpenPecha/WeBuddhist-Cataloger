import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/atoms/table";
import { IconWrapper } from "../../Icon-wrapper/IconWrapper";
import { LanguagesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LanguageMap = {
    "bo": "Tibetan",
    "en": "English",
}

export function DashBoardTable({
    data,
    isLoading
}: any) {
    const renderTableContent = () => {

        if (isLoading) {
            return (
                <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-muted-foreground">
                                Loading Texts...
                            </p>
                        </div>
                    </TableCell>
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
                            <p className="text-muted-foreground">
                                Text not found
                            </p>
                        </div>
                    </TableCell>
                </TableRow>
            );
        }

        return data.map((item: any) => (
            <TableRow key={item.id}>
                <TableCell
                    className="cursor-pointer"
                >
                    <Link to={`/instance/${item.id}`}>
                        <div className="text-lg font-monlam">{item.title.bo || item.title.en}</div>
                    </Link>
                </TableCell>
                <TableCell>
                    Root Text
                </TableCell>
                <TableCell>
                    <div className="flex items-center gap-2">
                        <IconWrapper>
                            <LanguagesIcon className="w-4 h-4 text-muted-foreground" />
                        </IconWrapper>
                        <p className="text-sm text-muted-foreground">{LanguageMap[item.language as keyof typeof LanguageMap]}</p>
                    </div>
                </TableCell>
                <TableCell>
                    {item.status ? <div className="flex items-center gap-2"> <div className="w-3 h-3 bg-green-500" /> Completed</div>
                        : <div className="flex items-center gap-2"> <div className="w-3 h-3  bg-red-500" /> Pending</div>}
                </TableCell>
            </TableRow>
        ));
    };
    return (
        <Table className="bg-white">
            <TableHeader className=" bg-sidebar">
                <TableRow>
                    <TableHead>
                        Title
                    </TableHead>
                    <TableHead>
                        Type
                    </TableHead>
                    <TableHead >
                        Language
                    </TableHead>
                    <TableHead>
                        Status
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>{renderTableContent()}</TableBody>
        </Table>
    );
}
