import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/config/firebase";
import { Link } from "react-router";

export function NavUser() {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  return (
    <Link to="/user-management">
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage
          src={user.photoURL || ""}
          alt={user.displayName || "User Avatar"}
        />
        <AvatarFallback className="rounded-lg">
          {user.displayName?.charAt(0) || "U"}
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}
