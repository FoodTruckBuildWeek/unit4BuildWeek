const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index"); 

function buildToken (user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role,
    }
    const config = {
        expiresIn: '1d',
    }
    return jwt.sign(
        payload, JWT_SECRET, config
    )
}

module.exports = {
    buildToken
};