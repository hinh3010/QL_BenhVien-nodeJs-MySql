import db from '../models/index.js'
import bcrypt from 'bcrypt'

const folder = 'admin/users'

export const getHomePage = (req, res) => {
    res.json({ admin: "Hello Admin" })
}

// get all
export const getUsersPage = async (req, res) => {
    try {
        const users = await db.User.findAll({
            raw: true
        })
        res.render(`${folder}/users.ejs`, { data: users })
    } catch (error) {
        console.log(error.message)
    }
}

// create
export const getCreateUserPage = async (req, res) => {
    res.render(`${folder}/createUser.ejs`)
}
export const createUser = async (req, res) => {
    if (!req.body) return console.log(error.message)
    const data = req.body
    try {
        // check email 
        const userOld = await db.User.findOne({ where: { email: data.email }, raw: true })
        if (userOld) return res.json({ error: 'The Email was registered' })

        // hash password
        let hashPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
        await db.User.create({
            email: data.email,
            password: hashPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === '1' ? true : false,
            roleId: data.roleId,
            // image: data.image,
            // positionId: data.positionId,
        })
        return res.redirect(`/${folder}`)
    } catch (error) {
        console.log(error.message)
    }
}

// update
export const getEditUserPage = async (req, res) => {
    const userId = req.query.id
    if (userId) {
        const data = await db.User.findOne({ where: { id: userId }, raw: true })
        // check xem trong db có user có id = id truyền từ url hay không
        if (data) {
            return res.render(`${folder}/editUser.ejs`, { data })
        } else {
            return res.json({ error: 'Not found' });
        }
    } else {
        return res.json({ error: 'Not found 404' })
    }
}
export const updateUser = async (req, res) => {
    if (!req.body) return console.log(error.message)
    const data = req.body
    const userId = req.query.id
    if (userId) {
        const user = await db.User.findOne({ where: { id: userId } })
        if (user) {
            user.firstName = data?.firstName
            user.lastName = data?.lastName
            user.address = data?.address
            user.phoneNumber = data?.phoneNumber

            await user.save()

            return res.redirect(`/${folder}`)
        } else {
            return res.json({ error: 'User Not found' });
        }
    } else {
        return res.json({ error: 'Not found 404' })
    }
}