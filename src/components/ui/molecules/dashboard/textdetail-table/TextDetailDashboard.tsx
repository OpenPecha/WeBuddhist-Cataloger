import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/atoms/table";
import { IconWrapper } from "../../Icon-wrapper/IconWrapper";
import { LanguagesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/atoms/button";

const LanguageMap = {
    "bo": "Tibetan",
    "en": "English",
    "tibphono": "Tibetan Phonetic",
}


export function TextDetailDashboard({
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
                        <div className="text-lg font-monlam">{item.title.tibphono || item.title.bo}</div>
                    </Link>
                </TableCell>
                <TableCell className=" capitalize">
                    critical
                </TableCell>
                <TableCell className=" capitalize">
                    {item.relationship}
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
                <TableCell>
                    <Button variant="outline" className="cursor-pointer" disabled={item.status}>
                        Trigger Upload
                    </Button>
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
                        Instance Type
                    </TableHead>
                    <TableHead>
                        Relationship
                    </TableHead>
                    <TableHead>
                        Language
                    </TableHead>
                    <TableHead >
                        Status
                    </TableHead>
                    <TableHead >
                        Action
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>{renderTableContent()}</TableBody>
        </Table>
    );
}
