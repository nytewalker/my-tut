import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div
        className="p-2 text-xl m-3 flex flex-col justify-center items-center font-mono"
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
        }}
      >
        <h1>Davido sabi sing</h1>
        <ol>
          <li className="text-2xl font-semibold border-b-3 border-gray-700 bg-slate-700 p-2 m-4">
            <a href="#">Simple</a>
          </li>
          <li className="text-2xl font-semibold border-b-3 border-gray-700 bg-slate-700 p-2 m-4">
            <a href="#">construct</a>
          </li>
        </ol>
      </div>

      <div
        className="p-2 text-xl m-3 flex flex-col justify-center items-center font-mono"
        style={{
          backgroundColor: theme.primary.main,
          color: theme.primary.text,
        }}
      >
        <h1>Davido sabi sing</h1>
        <ol>
          <li className="text-2xl font-semibold border-b-3 border-gray-700 bg-slate-700 p-2 m-4">
            <a href="#">Simple</a>
          </li>
          <li className="text-2xl font-semibold border-b-3 border-gray-700 bg-slate-700 p-2 m-4">
            <a href="#">construct</a>
          </li>
        </ol>
      </div>
    </div>
  );
};
