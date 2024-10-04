import React from "react";
import { LoggedIn } from "./components/state/LoggedIn";

const App = () => {
  return (
    <div>
      <h1 className="text-2xl p-4 text-white font-mono bg-slate-400 text-center ">
        Welcome to fedora react-typescript lessons
      </h1>
      <LoggedIn />
    </div>
  );
};

export default App;
