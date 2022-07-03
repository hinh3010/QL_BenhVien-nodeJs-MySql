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
        // console.log(users)
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
    // return res.json({ data })
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
    res.render(`${folder}/editUser.ejs`)
}

export const updateUser = async (req, res) => {
    res.json({ post: 'post' })
}