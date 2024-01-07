const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader) {
    console.log('6');
        req.isAuth = false;
        return next();
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersupersecretkey')
    } catch(err) {
    console.log('16');
        req.isAuth = false;
        return next();
    }
    if(!decodedToken) {
       console.log('21');
        req.isAuth = false;
        return next();
    }
    req.userId = decodedToken.userId;
    req.isAuth = true;
    next();
}