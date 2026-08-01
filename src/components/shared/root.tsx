import { auth } from "@/config/firebase";
import { Navigate, useLocation, useNavigation } from "react-router";

export default function Root() {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  if (isNavigating) {
    return <div>Loading...</div>;
  }

  const user = auth.currentUser;

  return user ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    <Navigate to="/auth" replace={true} state={{ from: pathname }} />
  );
}
