import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {  User} from "lucide-react";
  import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";




 export const Profile = () => {
        return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} size="icon">
                <User />
                </Button>

            </DropdownMenuTrigger>
    
            <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
            <Link to="/orders" className="hover:text-gray-800">
            <DropdownMenuItem>Orders</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        );
    };