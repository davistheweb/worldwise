import { useContext } from "react";
import { AuthContext } from "@contexts/FakeAuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("This context was used outside the auth provider");
}
