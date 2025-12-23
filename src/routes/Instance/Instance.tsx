import { useParams } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";
import { Badge } from "@/components/ui/atoms/badge";
import { TextDetailDashboard } from "@/components/ui/molecules/dashboard/textdetail-table/TextDetailDashboard";
import { Separator } from "@/components/ui/atoms/Seperator";
import { Button } from "@/components/ui/atoms/button";

const dummydata = [

    {
        "instance_id": "tq039qcQ2uhBP9ePIIGcv",
        "instance_type": "critical",
        "text_id": "8hMtbbtbMIErfGKZjj9Tb",
        "title": {
            "bo": "དཔལ་ལྡན་ས་གསུམ་མ། ༼ཁ་སྐད།༽"
        },
        "language": "bo",
        "relationship": "translation",
        "status": true
    },

    {
        "instance_id": "oqq9j0NlCEkUX2cdgifli",
        "instance_type": "critical",
        "text_id": "3NLv0TEwaLiuPhNL9VW6U",
        "title": {

            "tibphono": "palden sa sum ma"

        },
        "language": "tibphono",
        "annotation": "GYx9PwgC4VzY86XvKxRqL",
        "relationship": "translation",
        "status": false
    }

]

const Instance = () => {
    const { id } = useParams();
    console.log(id);

    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Dashboard", path: "/" },
        { label: "Instance", path: `/instance/${id}` },
    ];

    return (
        <MainLayout
            breadcrumbItems={breadcrumbItems}
        >
            <div className="flex flex-col w-full h-full border-t border-edge">
                <div className="text-2xl font-monlam p-4">
                    དཔལ་ལྡན་ས་གསུམ་མ།
                </div>
                <div className="flex items-center gap-2 p-4">
                    Version
                    <Badge variant="secondary">
                        Critical
                    </Badge>
                    <Button variant="outline" className="cursor-pointer" >
                        Trigger Bulk Upload
                    </Button>
                </div>
                <div className="text-xl p-4">
                    Alignment
                </div>
                <div className="flex">
                    <div className="w-4 h-full">
                        <Separator />
                    </div>
                    <div className="flex-1 max-h-[calc(100vh-15rem)] border border-edge overflow-y-auto">
                        <TextDetailDashboard
                            data={dummydata}
                        />
                    </div>
                    <div className="w-4 h-full">
                        <Separator />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Instance