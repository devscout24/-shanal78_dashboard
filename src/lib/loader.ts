import { auth } from "@/config/firebase";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { redirect } from "react-router";
import { toast } from "sonner";

export const loadUser = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      },
      reject,
    );
  });
};

export const loginWithGoogle = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
    await setPersistence(auth, browserLocalPersistence);

    toast.success("Logged in successfully!");
    return redirect(`${searchTerm}`);
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    toast.error(errorMessage);
    return redirect("/auth/login");
  }
};
