import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 my-16">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-4">
        <img
          src={user?.profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
        <h2 className="mt-4 text-xl">Hello, {user?.username || "Guest"}!</h2>
      </div>
    </div>
  );
};

export default Profile;
