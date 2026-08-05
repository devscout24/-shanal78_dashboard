import { auth } from "@/config/firebase";
import type { Invoice } from "@/types/billing";
import type { IMessage } from "@/types/messages";
import { faker } from "@faker-js/faker";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { redirect, type LoaderFunctionArgs } from "react-router";
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

export const logout = async () => {
  try {
    await auth.signOut();
    toast.success("Logged out successfully!");
    return redirect("/auth/login");
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    toast.error(errorMessage);
    return redirect("/dashboard");
  }
};

export const messages = async ({
  params,
}: LoaderFunctionArgs): Promise<IMessage[]> => {
  try {
    const { id } = params; // id is string | undefined here

    if (!id) throw new Error("No id provided");

    // const response = await fetch("/api/messages");
    // if (!response.ok) {
    //   throw new Error("Failed to fetch messages");
    // }
    // const data = await response.json();

    const messages: IMessage[] = Array.from({ length: 20 }, () => ({
      id: faker.string.uuid(),
      content: Array.from({ length: 5 }, () => faker.lorem.sentence()),
      attachments: Array.from({ length: 2 }, () => ({
        id: faker.string.uuid(),
        url: faker.image.urlLoremFlickr({ category: "nature" }),
      })),
      sender: faker.helpers.arrayElement(["user", "bot"]),
      user: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
      },
    }));

    return messages;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const billingHistory = async (): Promise<Invoice[]> => {
  try {
    // const response = await fetch("/api/billing-history");
    // if (!response.ok) {
    //   throw new Error("Failed to fetch billing history");
    // }
    // const data = await response.json();

    const invoices: Invoice[] = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      month: faker.date.month({ abbreviated: true }),
      status: faker.helpers.arrayElement(["Paid", "Unpaid", "Overdue"]),
      amount: parseFloat(faker.finance.amount({ min: 10, max: 100 })),
      plan: faker.helpers.arrayElement(["Basic", "Pro", "Enterprise"]),
    }));

    return invoices;
  } catch (error) {
    console.error(error);
    return [];
  }
};
