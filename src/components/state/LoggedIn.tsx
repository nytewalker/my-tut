import  { useState } from 'react'


export const LoggedIn = () => {

    const [isloggedIn, setIsLoggedIn] = useState(false)




    const handleLogIn = () => {setIsLoggedIn(true)}
    const handleLogOut = () => {setIsLoggedIn(false)}

    return (
        <div>
            <button onClick={handleLogIn}>
                Log In
            </button>

            <button onClick={handleLogOut}>
                Log Out
            </button>

            <div>
                User is {isloggedIn? 'Logged In' : 'Logged Out'}
            </div>
        </div>
    )
}