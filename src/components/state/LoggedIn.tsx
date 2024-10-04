import { useState } from "react";

export const LoggedIn = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col text-lg font-mono items-center justify-center">
      <div className="flex gap-4 mt-3">
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
      </div>

      <div>User is {isloggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
