import db from '../models/index.js'
import bcrypt from 'bcrypt'
import services from '../services/index';

const folder = 'admin/users'

export const getHomePage = (req, res) => {
    res.json({ admin: "Hello Admin" })
}

// get all
export const getUsersPage = async (req, res) => {
    const { resp, err } = await services.fetchAll({ Model: db.User })
    if (err === null && resp) {
        return res.render(`${folder}/users.ejs`, { data: resp })
    }
    return console.log(err)
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

        const { resp, err } = await services.create({
            Model: db.User,
            data: {
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
            }
        })

        if (resp && err === null) {
            return res.redirect(`/${folder}`)
        }
        else {
            return console.log(err)
        }
    } catch (error) {
        console.log(error.message)
    }
}

// update
export const getEditUserPage = async (req, res) => {
    const userId = req.query.id
    if (userId) {
        const { resp, err } = await services.fetchOne({
            Model: db.User,
            where: { id: userId }
        })

        if (resp && err === null) {
            return res.render(`${folder}/editUser.ejs`, { data: resp })
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
        const user = await db.User.findOne({ where: { id: userId }, raw: false })

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

// delete
export const deleteUser = async (req, res) => {
    const id = req.query.id
    const { resp, err } = await services.remove({
        Model: db.User, where: { id: id }
    })
    if (resp && err === null) {
        return res.redirect(`/${folder}`)
    } else {
        return res.json('Thất bại')
    }
}