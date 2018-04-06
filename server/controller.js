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
    },
    delete: (req, res) => {
        const db = req.app.get('db')

        db.delete_product([req.params.id]).then(() => {
            res.status(200).send();
        })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const{name, price, image} = req.body

        db.edit_product([name, price, image, req.params.id]).then(() => {
            res.status(200).send()
        })
    }
}