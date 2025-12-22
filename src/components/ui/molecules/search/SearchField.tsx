import { SearchIcon } from 'lucide-react'
import { Input } from '../../atoms/input'

const SearchField = () => {
    return (
        <div className="border w-fit bg-white px-2 h-12 rounded-none border-gray-200 flex items-center">
            <SearchIcon className="w-4 h-4" />
            <Input
                placeholder="Search"
                className="rounded-none border-none shadow-none"
            />
        </div>
    )
}

export default SearchField