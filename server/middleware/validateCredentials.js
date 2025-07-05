function validateCredentials(req, res, next){
    const{email, password} = req.body;

    if(!email || !password || email.trim()==="" || password.trim()===""){
        return res.status(400).send("Empty Fields!");
    }

    next();
}

module.exports = validateCredentials;