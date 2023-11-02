import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}
