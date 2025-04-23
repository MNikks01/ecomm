import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const generateAccessToken = (email, role) => {
    try {
        const token = jwt.sign(
            {
                email: email,
                role: role
            },
            process.env.JWT_ACCESS_SECRET_KEY,
            {
                expiresIn: process.env.JWT_ACCESS_EXPIRES_IN
            }
        )
        return token
    } catch (error) {
        return null
    }
}

const generateRefreshToken = (email, role) => {
    try {
        const token = jwt.sign(
            {
                email: email,
                role: role
            },
            process.env.JWT_REFRESH_SECRET_KEY,
            {
                expiresIn: process.env.JWT_REFRESH_EXPIRES_IN
            }
        )
        return token
    } catch (error) {
        return null
    }
}

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if (!token)
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        })

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY)
        console.log('decoded from verifyToken ->', decoded)

        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        })
    }
}

export { generateAccessToken, generateRefreshToken, verifyToken }
