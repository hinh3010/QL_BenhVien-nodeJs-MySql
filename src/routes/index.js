import express from 'express'
import { getHomePageAdmin } from '../controllers/admin.js'
let router = express.Router()

const initRoutes = (app) => {
    router.get('/', getHomePageAdmin)

    return app.use('/admin', router)
}

export default initRoutes
