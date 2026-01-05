import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react";
import { clearAccessToken } from "@/lib/auth-utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/dropdown-menu";

const UserProfile = () => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    clearAccessToken();
    logout({
      logoutParams: {
        returnTo: window.location.origin + "/login",
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-between items-center w-full cursor-pointer ">
          <div className="flex items-center md:space-x-2">
            <div className="bg-white border border-edge rounded-full">
              <img
                src={user?.picture}
                alt="user-profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-none">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer rounded-none"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
