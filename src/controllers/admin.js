import db from '../models/index.js'

export const getHomePageAdmin = (req, res) => {
    res.json({ admin: "Hello Admin" })
}

export const getUsersPageAdmin = async (req, res) => {
    try {
        const users = await db.User.findAll({
            raw: true
        })
        // console.log(users)
        res.render('admin/users.ejs', { data: users })
    } catch (error) {
        console.log(error.message)
    }
}