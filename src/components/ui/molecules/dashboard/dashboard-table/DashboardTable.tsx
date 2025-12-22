import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/atoms/table";
import { IconWrapper } from "../../Icon-wrapper/IconWrapper";
import { LanguagesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LanguageMap = {
    "bo": "Tibetan",
    "en": "English",
}

const TypeMap = {
    "translation_source": "Translation Source",
    "none": "No Align Text"
}

export function DashBoardTable({
    data
}: any) {


    const renderTableContent = () => {

        if (data.length === 0) {
            return (
                <TableRow>
                    <TableCell
                        colSpan={6}
                        className="text-center py-10 text-muted-foreground"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-base text-muted-foreground">
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
                        <div className="text-lg font-monlam">{item.title.bo}</div>
                    </Link>
                </TableCell>
                <TableCell>
                    {item.date}
                </TableCell>
                <TableCell>
                    {item.contributions.length}
                </TableCell>
                <TableCell>
                    {TypeMap[item.type as keyof typeof TypeMap]}</TableCell>
                <TableCell className="flex items-center gap-2">
                    <IconWrapper>
                        <LanguagesIcon className="w-4 h-4 text-muted-foreground" />
                    </IconWrapper>
                    <p className="text-sm text-muted-foreground">{LanguageMap[item.language as keyof typeof LanguageMap]}</p>
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
                        Date Added
                    </TableHead>
                    <TableHead>
                        Contributors
                    </TableHead>
                    <TableHead>
                        Type
                    </TableHead>
                    <TableHead >
                        Language
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>{renderTableContent()}</TableBody>
        </Table>
    );
}
