const firebase = require('firebase-admin');
const getAllPosts = () => {
    const db = firebase.database();
        const postRef = db.ref("posts");
        postRef.on("value", (snapshot) => {
            return snapshot.val();
            }
        );
}


module.exports = {
    getAllPosts: (req, res) => {
        const db = firebase.database();
        const postRef = db.ref("posts");
        postRef.once("value", (data) => {
            res.status(200).send(data.val());
            }
        );
    },
    // getOnePost: (req, res) => {
    //     const db = req.app.get('db');
    //     const {id} = req.params;
    //     db.get_one_post(id).then(post => {
    //         res.status(200).send(post)
    //     })
    // },
    createPost: (req, res) => {
        const db = firebase.database();
        const postRef = db.ref("posts");
        console.log(req.body)
        const {photo, description, id, title} = req.body;
        postRef.push({photo, description, id, title, likes: 0});
        postRef.on("value", (snapshot) => {
            res.status(200).send(snapshot.val());
            }, (error) => {
            console.log("Error in postcontroller.getAllPosts", error.code);
        });
    },
    // deletePost: (req, res) => {
    //     const db = req.app.get('db');
    //     const {id} = req.params;
    //      db.delete_post(id).then(posts => {
    //          res.status(200).send(posts)
    //      })
    // }
}