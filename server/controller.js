module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory().then(results => {
            res.status(200).send(results)
        })
    },
}