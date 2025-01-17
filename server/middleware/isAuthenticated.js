const isAuthenticated = async(req,res,next) =>{
    try {
        const token = req.cookie.token;
        console.log(token);
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports = isAuthenticated;