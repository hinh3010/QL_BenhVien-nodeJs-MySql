import express from 'express'
import { getHomePageAdmin, getUsersPageAdmin } from '../controllers/admin.js'
let router = express.Router()

const initRoutes = (app) => {
    router.get('/', getHomePageAdmin)
    router.get('/users', getUsersPageAdmin)

    return app.use('/admin', router)
}

export default initRoutes
