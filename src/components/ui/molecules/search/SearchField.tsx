import { SearchIcon } from "lucide-react";
import { Input } from "../../atoms/input";

const SearchField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="border w-fit bg-white px-2 h-12 rounded-none border-gray-200 flex items-center">
      <SearchIcon className="w-4 h-4" />
      <Input
        placeholder="Search"
        className="rounded-none border-none shadow-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
