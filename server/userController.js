module.exports = {
    
    
    register: (req, res) => {
        let db = req.app.get('db');
        let {username, password} = req.body;
        db.createUser(username, password).then(response => {
            let id = req.session.id
            res.status(200).send(response)
        })
    },


    login: (req, res) => {
        let db = req.app.get('db');
        let {username, password} = req.body;
        db.findUser(username, password).then(response => {
            res.status(200).send(response)
        })
    },

    findByUserId: (req, res) => {
        let db = req.app.get('db');
        let { id } = req.body;
        db.findByUserId(id).then(response => {
            res.status(200).send(response)
        })
    },

}


