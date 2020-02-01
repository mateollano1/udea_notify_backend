exports.loginValidation = (user) =>{
    if(user.password && user.username){
        return await user.find(user)
    }
}