import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../../firebase';
// import axios from 'axios';

function Register(props){
    const [number, inputNumber] = useState('');
    const [verify, updateVerify] = useState(false);
    const [code, updateCode] = useState()
    const [ready, setReady] = useState(false);
    const [confirmMe, updateConfirm] = useState()

    useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container")
    setReady(true)
    }, ready)

    const registerUser = () => {
        const appVerifier = window.recaptchaVerifier;
            firebase
            .auth()
            .signInWithPhoneNumber(number, appVerifier)
            .then(confirmResult => {
                updateConfirm({confirmFunction: confirmResult})
                updateVerify(confirmResult.verificationId)
            })
        }


        const finish = (code) => {
            console.log(code.toString())
            console.log(confirmMe.confirmFunction.confirm)
            confirmMe.confirmFunction.confirm(code).then(res => {
                console.log(res)
            })
        }

    return (
        <div>
            <h1>Register</h1>
            {console.log('verify', verify)}
            { 
                verify ?
                <div>
                    123456
                    Enter Code:
                    <input onChange={(e) => updateCode(e.target.value)}/>
                    <button onClick={() => finish(code)}>Submit</button>
                    </div>
            :
            <div>
                +12345678910
                Phone Number:
                <input onChange={(e) => inputNumber(e.target.value)}/>
                <button onClick={() => registerUser()}>Submit</button>
            </div>
            }
            <div id="recaptcha-container"></div>
        </div>
    )
};

export default withRouter(Register);