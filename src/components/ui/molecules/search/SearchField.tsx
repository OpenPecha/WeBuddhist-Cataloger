import { SearchIcon } from 'lucide-react'
import { Input } from '../../atoms/input'

const SearchField = () => {
    return (
        <div className="border w-fit px-2 bg-white rounded-none border-gray-200 flex items-center">
            <SearchIcon className="w-4 h-4" />
            <Input
                placeholder="Search"
                className="rounded-none border-none px-4 shadow-none py-2"
            />
        </div>
    )
}

export default SearchField