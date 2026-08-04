import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { redirect, type ActionFunctionArgs } from "react-router";
import { toast } from "sonner";

export const login = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    Object.keys(credentials).forEach((field) => {
      if (!credentials[field]) {
        throw new Error(`${field} is required field!`);
      }
    });

    // Perform login logic here
    await signInWithEmailAndPassword(
      auth,
      String(credentials.email),
      String(credentials.password),
    );

    // Redirect to the previous route or a default route
    toast.success("Login successful!");
    return redirect(`${searchTerm}`);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred during login.";
    console.error(error);
    return toast.error(errorMessage);
  }
};

export const register = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    Object.keys(credentials).forEach((field) => {
      if (!credentials[field]) {
        throw new Error(`${field} is required field!`);
      }
    });

    // Perform registration logic here
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      String(credentials.email),
      String(credentials.password),
    );

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: credentials.name as string,
    });

    // Redirect to the previous route or a default route
    toast.success("Registration successful!");
    return redirect(`${searchTerm}`);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred during registration.";
    console.error(error);
    return toast.error(errorMessage);
  }
};

export const forgotPassword = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    Object.keys(credentials).forEach((field) => {
      if (!credentials[field]) {
        throw new Error(`${field} is required field!`);
      }
    });

    const email = String(credentials.email);
    await sendPasswordResetEmail(auth, email);

    // Redirect to a success page or show a success message
    toast.success("Password reset email sent!");
    return redirect("/auth/login");
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred during password reset.";
    console.error(error);
    return toast.error(errorMessage);
  }
};

export const sendNewMessage = async ({ request }: ActionFunctionArgs) => {
  try {
    const idToken = await auth.currentUser?.getIdToken(true); // force refresh

    if (!idToken) throw new Error("Not authenticated");

    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    if (!credentials.message) {
      throw new Error("Message is required field!");
    }

    const response = await fetch("/data-team/chat/query", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: String(credentials.message), // API expects "query" not "message"
        products: [{ product_sku: "federal-2026" }],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Failed to send message");
    }

    const data = await response.json();
    console.log("🚀 ~ sendNewMessage ~ data:", data);

    return redirect("/compliance-chat/2");
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred while sending the message.";
    console.error(error);
    toast.error(errorMessage);
    return null;
  }
};

export const sendMessage = async ({ request, params }: ActionFunctionArgs) => {
  try {
    if (!params.id) throw new Error("No id provided");

    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    if (!credentials.message) {
      throw new Error("Message is required field!");
    }

    // Perform message sending logic here
    console.log("Message sent:", credentials);

    return redirect(`/compliance-chat/${params.id}`);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred while sending the message.";
    console.error(error);
    return toast.error(errorMessage);
  }
};

export const updateProfileInfo = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    Object.keys(credentials).forEach((field) => {
      if (!credentials[field]) {
        throw new Error(`${field} is required field!`);
      }
    });

    const user = auth.currentUser;

    if (!user) {
      throw new Error("No authenticated user found");
    }

    await updateProfile(user, {
      displayName: `${credentials["first-name"]} ${credentials["last-name"]}`,
    });

    toast.success("Profile updated successfully!");
    return redirect("/user-management/profile");
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An error occurred while updating the profile.";
    console.error(error);
    return toast.error(errorMessage);
  }
};
