import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';
import axios from 'axios';

function Register(props){
    const [username, inputUsername] = useState('');
    const [password, inputPassword] = useState('');
    const [confirmPassword, reInputPassword] = useState('');

    const registerUser = () => {
        const user = {
            username,
            password
        }
        if(password !== confirmPassword){
            alert('Password do not match')
        } else {
            axios.post('/register', user).then(res => {
                if(res.data.message){
                    alert(res.data.message)
                } else if (res.data.user) {
                    // console.log()
                    props.updateUser(res.data.user)
                    props.history.push('/dashbaord')
                }
                console.log(res)
            })
        }
    }
    
    return (
        <div>
            <h1>Register</h1>
            <div>
                Username: <input onChange={(e) => inputUsername(e.target.value)}/>
            </div>
            <div>
                Password: <input onChange={(e) => inputPassword(e.target.value)}/>
            </div>
            <div>
                Re-Enter Password: <input onChange={(e) => reInputPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => registerUser()}>Submit</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));