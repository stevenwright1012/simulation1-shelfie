module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory().then(results => {
            res.status(200).send(results)
        })
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, price, image} = req.body

        db.create_product([name, price, image]).then(() => {
            res.status(200).send();
        })
        
    }
}