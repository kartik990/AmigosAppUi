import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Tom cruise",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEztvWDv2fAomWpMnhzPX01uV0YwZjc5pU0AZXpPq9g&usqp=CAU&ec=48665701",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
