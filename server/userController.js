module.exports = {
    
    
    register: (req, res) => {
        const {session} = req;
        let db = req.app.get('db');
        let {username, password} = req.body;
        db.createUser(username, password).then(response => {
            session.userid=response[0].id
            res.status(200).send(response)
        })
    },
    // session.user.id=id

    login: (req, res) => {
        const {session} = req;
        let db = req.app.get('db');
        let {username, password} = req.body;
        db.findUser(username, password).then(response => {
            session.userid=response[0].id
            res.status(200).send(response)
        })
    },

    findByUserId: (req, res) => {
        let db = req.app.get('db');
        db.findByUserId(id).then(response => {
            res.status(200).send(response)
        })
    },

}


