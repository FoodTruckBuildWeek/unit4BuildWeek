const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index"); // use this secret!

function buildTokenDiner (diner) {
    const payload = {
        subject: diner.user_id,
        username: diner.username,
        email: diner.email,
        role: diner.role,
    }
    const config = {
        expiresIn: '1d',
    }
    return jwt.sign(
        payload, JWT_SECRET, config
    )
}

module.exports = {
    buildTokenDiner
};