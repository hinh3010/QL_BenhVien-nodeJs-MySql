import express from 'express'
import {
    getHomePage, getUsersPage,
    getCreateUserPage, createUser,
    getEditUserPage, updateUser
} from '../controllers/admin.js'
let router = express.Router()

const initRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/users', getUsersPage)

    router.get('/users/create', getCreateUserPage)
    router.post('/users/create', createUser)

    router.get('/users/edit/:id', getEditUserPage)
    router.post('/users/edit/:id', updateUser)

    return app.use('/admin', router)
}

export default initRoutes
