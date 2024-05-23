class Seller {
    // ? login
    static async renderLogSeller(req, res){
        // render
        try {
            res.render('auth-pages/sellers/log-seller')
        } catch (error) {
            res.send(error)
        }
    }


    static async handlerLogSeller(req, res){
        // handler
        try {
            
        } catch (error) {
            res.send(error)
        }
    }

    // ? register
    static async renderRegSeller(req, res) {
        // render
        try {
            res.render('auth-pages/sellers/reg-seller')
        } catch (error) {
            res.send(error)
        }   
    }

    static async handlerRegSeller(req, res) {
        // handler
        try {
            
        } catch (error) {
            res.send(error)
        }   
    }
}

module.exports = Seller