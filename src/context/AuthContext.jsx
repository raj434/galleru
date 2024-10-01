import React, { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mock user data (replace this with actual authentication logic)
  const [user, setUser] = useState({
    username: "Raj",
    profileImage: "https://yt3.googleusercontent.com/ytc/AL5GRJVmtMsPb7II-phw9rC1g9ypUMKN64kBlL4mRAKSAA=s900-c-k-c0x00ffffff-no-rj", // Replace with actual profile image URL
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
