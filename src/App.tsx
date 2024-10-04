import React from "react";
// import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/contexts/User";

const App = () => {
  return (
    <div className="flex text-center">
      <User/>
    </div>
  );
};

export default App;
