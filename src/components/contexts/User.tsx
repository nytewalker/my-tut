import { useContext } from "react"
import { UserContext } from "./UserContext"


export const User = () => {
    const user_context = useContext(UserContext)
    const handleLogin = () => {
            user_context.setUser({
                name: 'nytewalker',
                email: 'iam9itewalker@gmail.com'
            })
        }
    const handleLogout = () => {
            user_context.setUser(null)
    }

    return (
        <div className="gap-2 flex flex-col">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name: {user_context?.user?.name}</div>
            <div>User email: {user_context.user?.email}</div>
        </div>
    )
}