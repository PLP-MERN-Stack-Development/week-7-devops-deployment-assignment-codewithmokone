const jwt = require('jsonwebtoken');

const generateToken = (user, expiresIn = '1h') => {
    const secretKey = process.env.JWT_SECRET || '012345';

    const token = jwt.sign(
        { id: user._id }, secretKey, { expiresIn }
    );

    return token;
};

module.exports = generateToken;