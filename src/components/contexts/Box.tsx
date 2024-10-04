import { useContext } from "react"
import { ThemeContext } from "./themeContext"

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className="p-2 text-xl mt-3 flex justify-center items-center font-mono"
        style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>Theme Context</div>
    )
} 