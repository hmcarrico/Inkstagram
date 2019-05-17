import React, {useState} from 'react';
import axios from 'axios';

function Login(props){
    const [username, inputUsername] = useState('');
    const [password, inputPassword] = useState('');

    const login = () => {
        const user = {
            username,
            password
        }
        axios.post('/login', user).then(res => {
            console.log(res)
            if(res.data.message){
                alert(res.data.message)
            } else if (res.data.user) {
                console.log('hello')
                props.history.push('/dashboard')
            }
        })
    }
    
    return (
        <div>
            <h1>Login</h1>
            <div>
                Username: <input onChange={(e) => inputUsername(e.target.value)}/>
            </div>
            <div>
                Password: <input onChange={(e) => inputPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => login()}>Submit</button>
            </div>
        </div>
    )
}

export default Login;