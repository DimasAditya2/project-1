const { User } = require('../models/index')
const bcrypt = require('bcryptjs')

class UserController {
    static async registerForm(req, res){
        try {
            res.render('register-form')

        }catch(error){
            res.send(error)
        }
    }

    static async registerHandler(req, res){
        try {
            const { email, password, role } = req.body

            await User.create({
                email,
                password,
                role
            })

            res.redirect('/login')

        }catch(error){
            res.send(error)
        }
    }

    static async login(req, res){
        try {
            res.render('login-form',{error:req.query.error})

        }catch(error){
            res.send(error)
        }
    }

    static async loginPost(req, res){
        try {
            const { email, password } = req.body

            let user = await User.findOne({
                where: {
                    email
                }
            })

            if(user){
                const isValidPassword = bcrypt.compareSync(password, user.password)
                req.session.userId = user.id
                req.session.role = user.role

                if(isValidPassword){
                    return res.redirect('/home')
                }else{
                    const error = "Invalid username/password"
                    return res.redirect(`/login?error=${error}`)
                }

            }else{
                const error = "Invalid username/password"
                return res.redirect(`/login?error=${error}`)
            }

        }catch(error){
            res.send(error)
        }
    }

    static logout(req, res){
        req.session.destroy((err) => {
            if(err){
                res.send(err)
            }else{
                res.redirect('/login')
            }
        })
    }
}

module.exports = UserController