class Controller {
    static async home(req, res) {
        try {
            res.render('index')
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller