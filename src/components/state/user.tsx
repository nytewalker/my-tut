import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "nytewalker",
      email: "iam9itewalker@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-5">
        <button onClick={handleLogIn}> Log In </button>
        <button onClick={handleLogOut}> Log Out </button>
      </div>
      <p>
        Name{user?.name}
      </p>
    </div>
  );
};
