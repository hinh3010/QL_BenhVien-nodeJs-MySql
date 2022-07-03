import db from '../models/index.js'

export const getHomePageAdmin = async (req, res) => {
    try {
        const users = await db.User.findAll({
            raw: true
        })
        // console.log(users)
        res.render('admin/home.ejs', { data: users })
    } catch (error) {
        console.log(error.message)
    }
}