import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function UserP() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLoggedIn = () => {
    setUser({
      name: "nytewalker",
      email: "iam9itewalker@gmail.com",
    });
  };
  const handleLoggedOut = () => {
    setUser(null);
  }

  return (
    <div className="flex justify-center items-center  flex-col">
      <div className="flex justify-center items-center gap-5">
        <button onClick={handleLoggedIn}> Log In </button>
        <button onClick={handleLoggedOut}> Log Out </button>
      </div>
      <h2>Name: {user?.name}</h2>
      <small>Email: {user?.email}</small>
    </div>
  );
}
