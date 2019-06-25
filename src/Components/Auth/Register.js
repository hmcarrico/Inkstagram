import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import axios from 'axios';

function Register(props){
    const [number, inputNumber] = useState('');
    const [verify, updateVerify] = useState(false);
    const [ready, setReady] = useState(false);

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
                console.log(confirmResult)
                // updateVerify(confirmResult.verificationId)


                // let code = prompt('Enter code:')
                // return confirmationResult.confirm(code)
                // window.confirmationResult = confirmationResult;
                // firebase.signInWithPhoneNumber(email, appVerifier)
            })
        }


        const finish = (code) => {
            firebase.auth.PhoneAuthProvider.credential(verify, code)
        }



console.log('verify', verify)


            // let code = prompt('Enter code:')
            //     code()
            //     if(code){
            //     firebase.auth.PhoneAuthProvider.credential(confirmResult.verificationId, code)

    
    return (
        <div>
            <h1>Register</h1>
            { 
                verify === true ?
                <div>
                    +12345678910
                    Phone Number:
                    <input onChange={(e) => inputNumber(e.target.value)}/>
                    <button onClick={() => registerUser()}>Submit</button>
                </div>
            :
            <div>
                123456
                Enter Code:
                <input onChange={(e) => updateVerify(e.target.value)}/>
                <button onClick={() => finish()}>Submit</button>
            </div>
            }
            <div id="recaptcha-container"></div>
        </div>
    )
};

export default withRouter(Register);