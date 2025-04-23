import bcrypt from 'bcryptjs'

const hashPassword = async (password) => {
    const salt = 10

    try {
        const hashedPwd = await bcrypt.hash(password, salt)
        return hashedPwd
    } catch (error) {
        return false
    }
}

const comparePassword = async (password, hashedPwd) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPwd)
        return isMatch
    } catch (error) {
        return false
    }

}

export { comparePassword, hashPassword }