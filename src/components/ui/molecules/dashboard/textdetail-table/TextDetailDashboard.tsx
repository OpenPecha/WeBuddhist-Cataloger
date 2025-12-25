import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/atoms/table";
import { IconWrapper } from "../../Icon-wrapper/IconWrapper";
import { LanguagesIcon } from "lucide-react";
import { Button } from "@/components/ui/atoms/button";

const LanguageMap = {
    "bo": "Tibetan",
    "en": "English",
    "tibphono": "Tibetan Phonetic",
}


export function TextDetailDashboard({
    data, isLoading
}: any) {


    const renderTableContent = () => {
        if (isLoading) {
            return (
                <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-muted-foreground">
                                Loading Text Details...
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
                        colSpan={6}
                        className="text-center py-10 text-muted-foreground"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-muted-foreground">
                                No Alignemnts Found
                            </p>
                        </div>
                    </TableCell>
                </TableRow>
            );
        }

        return data.map((item: any, index: number) => (
            <TableRow key={index}>
                <TableCell>
                    <div className="text-lg font-monlam">{item.metadata.title.tibphono || item.metadata.title.bo || item.metadata.title.en}</div>
                </TableCell>
                <TableCell className=" capitalize">
                    critical
                </TableCell>
                <TableCell className=" capitalize">
                    {item.relation_type}
                </TableCell>
                <TableCell>
                    <div className="flex items-center gap-2">
                        <IconWrapper>
                            <LanguagesIcon className="w-4 h-4 text-muted-foreground" />
                        </IconWrapper>
                        <p className="text-sm text-muted-foreground">{LanguageMap[item.metadata.language as keyof typeof LanguageMap]}</p>
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
