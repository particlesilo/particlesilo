import React, { useState } from 'react'
import { PrimaryButton } from './PrimaryButton';
import { TextInput } from './TextInput'

export const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const onLogin = () => {
        console.log("trying to log in"); 
    }
    return( 
        <div className="px-12 pb-10 mx-auto justify-items-center">
            <TextInput name="Email" type="email" value={email} setValue={setEmail} />   
            <TextInput name="Password" type="password" value={password} setValue={setPassword} />
            <PrimaryButton text="Login" onClick={onLogin}/>
        </div>
    )
}

