const firebase = require('firebase-admin');
const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    register: (req, res) => {
        const db = firebase.database();
        const usersRef = db.ref("users");
        const { email, password } = req.body;
        firebase.auth().languageCode = 'it';
        firebase.auth().signInWithPhoneNumber(email).then(res => console.log("IT WORKEEED????", res))
    },
    login: (req, res) => {
        const db = firebase.database();
        const postRef = db.ref("users");
        const { username, password } = req.body;
        console.log(postRef.child(username))
        // postRef.orderByKey()
        //     .equalTo($stateParams.codeId)
        //         .once('value', function(snap) {
        //         console.log(snap.val()); // returns `null`
        //         })
        // db.find_user([username]).then(users => {
        // if (users.length) {
        //     bcrypt.compare(password, users[0].password).then(passwordsMatch => {
        //         if (passwordsMatch) {
        //         req.session.user = { username: users[0].username };
        //         res.json({ user: req.session.user });
        //     } else {
        //         res.status(200).send({ message: 'Incorrect password' })
        //         }
        //     })
        //     } else {
        //         res.status(403).json({ message: "That user is not currently registered" })
        //         }
        // });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send();
    },
    getSession: (req, res) => {
        res.status(200).send(req.session.user)
    }
}