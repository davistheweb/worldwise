import { useReducer, createContext } from "react";
import FAKE_USER from "@constants";
const AuthContext = createContext();

const initialState = {
  user: null,
  isAunticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAunticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAunticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
}


function AuthProvider({ children }) {
  const [{ user, isAunticated }, dispatch] = useReducer(reducer, initialState);
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAunticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
