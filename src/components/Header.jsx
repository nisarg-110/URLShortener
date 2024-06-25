import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LinkIcon, LogOut } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const user = true;

  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" className="h-8" alt="URLShortener logo" />
      </Link>
      <div className="flex gap-4">
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-800 hover:bg-gray-700 active:bg-gray-600">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>NP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 py-2 shadow-lg bg-gray-900 rounded-md border border border-gray-700">
              <DropdownMenuLabel className="block text-m font-semibold mb-2 px-4 py-2 rounded-sm">
                Nisarg Patel
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="border-b border-gray-600 my-1 h-px" />
              <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-150">
                <Link
                  to="/dashboard"
                  className="flex items-center w-full text-white"
                >
                  <LinkIcon className="mr-2 h-4 w-4 text-white" />
                  My Links
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center px-4 py-2 text-white hover:text-red-400 bg-red-600 cursor-pointer transition-colors duration-150">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
}

export default Header;
