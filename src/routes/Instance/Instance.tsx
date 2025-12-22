import { useParams } from "react-router-dom";

const Instance = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className="flex items-center justify-center h-screen">Instance {id}</div>
    )
}

export default Instance