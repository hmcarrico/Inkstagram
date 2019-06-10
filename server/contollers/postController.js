module.exports = {
    getAllPosts: (req, res) => {
        const db = req.app.get('db');
        // db.get_all_posts().then(posts => {
        //     res.status(200).send(posts);
        // })
    },
    getOnePost: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        // db.get_one_post(id).then(post => {
        //     res.status(200).send(post)
        // })
    },
    createPost: (req, res) => {
        const db = req.app.get('db');
        const {photo, description} = req.body;
        // db.create_post([photo, description]).then(posts => {
        //     res.status(200).send(posts)
        // })
    },
    deletePost: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        // db.delete_post(id).then(posts => {
        //     res.status(200).send(posts)
        // })
    }
}