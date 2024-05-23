class Customer {
    // * login
    static async renderLogUser(req, res){
        // render
        try {
            res.render('auth-pages/customers/log-cust')
        } catch (error) {
            res.send(error)
        }
    }

    static async handlerLogUser(req, res){
        // handler
        try {
            
        } catch (error) {
            res.send(error)
        }
    }

    // ? register
    static async renderRegUser(req, res) {
        // render
        try {
            res.render('auth-pages/customers/reg-cust')
        } catch (error) {
            res.send(error)   
        }   
    }

    static async handlerLogUser(req, res) {
        // handler
        try {
            
        } catch (error) {
            res.send(error)
        }   
    }



}

module.exports = Customer