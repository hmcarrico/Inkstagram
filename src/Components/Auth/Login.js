import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';
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
                props.updateUser(res.data)
                props.history.push('/dashboard')
            }
        })
    }

    useEffect(() => {
        console.log(props.user)
    //   props.updateUser({hello: 'hello'}
    }, [props.user])
    
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

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = {
    updateUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));