import logo from "@/assets/icon/pecha_icon.png";
import UserProfile from "../user-profile/UserProfile";
import { Separator } from "../../atoms/Seperator";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-fit mx-auto flex justify-center">
      <div className="w-full border-b border-edge flex items-center">
        <Link to="/">
          <div className="flex items-center gap-2 w-fit p-4">
            <img src={logo} alt="logo" className=" w-10 h-10" />
            <h1 className=" text-base font-bold">WeBuddhist </h1>{" "}
            <p className="border-l-2 border-red-700 pl-2">Cataloger</p>
          </div>
        </Link>
        <Separator className="flex-1" />
        <div className="flex items-center gap-2  w-fit p-4">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
