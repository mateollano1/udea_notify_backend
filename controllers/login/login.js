const {loginValidation} = require('../../domain/login/login')


exports.login = (req,res) => {
    loginValidation(req.body.user)
}
