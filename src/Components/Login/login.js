import React, {useState} from 'react';

function Login(){
    const [username, inputUsername] = useState('')
    const [password, inputPassword] = useState('')
    return (
        <div>
            <h1>Login</h1>
            <div>
                Username: <input onChange={(e) => inputUsername(e.target.value)}/>
            </div>
            <div>
                Password: <input onChange={(e) => inputPassword(e.target.value)}/>
            </div>
        </div>
    )
}

export default Login;