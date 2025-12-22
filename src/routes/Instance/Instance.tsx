import { useParams } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";

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
            <div className="flex w-full h-full">
                hi
            </div>
        </MainLayout>
    )
}

export default Instance