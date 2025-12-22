import { UserIcon } from "lucide-react"
const UserProfile = () => {
    return (
        <div className=" space-x-4 flex justify-between items-center w-full">
            <div className="flex items-center md:space-x-2">
                <div className=" bg-white border border-sidebar-border p-2 rounded-full">
                    <UserIcon className="w-4 h-4" />
                </div>
                <div className="hidden md:flex text-sm flex-col">
                    <span >Tenzin Delek</span>
                    <span className="text-xs text-text-custom">tenzin@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default UserProfile