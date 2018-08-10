module.exports = {
    
    
    register: (req, res) => {
        let db = req.app.get('db');
        let {username, password} = req.body;
        db.createUser(username, password).then(response => {
            res.status(200).send(response)
        })
    },


    login: (req, res) => {
        let db = req.app.get('db');
        let {username, password} = req.body;
        db.getUser().then(response => {
            res.status(200).send(response)
        })
    }

}


