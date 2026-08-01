import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";

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
