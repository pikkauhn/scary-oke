const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send('invalid credentials');
    } else {
        const token = authHeader.slice(7,authHeader.length);
        jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
            if (err) {           
                // console.log(err);
                req.err = err;
                next();
            } else {
                req.user = decoded._id;                   
                next();
            }
        })
    }
}