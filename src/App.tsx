import React from "react";
import { UserContextProvider } from "./components/contexts/UserContext";
import { User } from "./components/contexts/User";


const App = () => {
  return (
    <div className="bg-green-400 flex flex-col text-center justify-center items-center gap-2 h-full">
      <h1 className="text-2xl text-white p-3">
        useContext~practice
      </h1>
      <div>
        <UserContextProvider>
          <User/>
        </UserContextProvider>
      </div>
    </div>
  );
};

export default App;
