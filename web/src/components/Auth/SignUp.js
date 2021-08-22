import React from 'react'

export const SignUp = () => {
    return( 
        <div className="flex-col place-content-center">
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </div> 
    )
}

