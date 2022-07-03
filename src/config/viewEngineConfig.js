import express from 'express'

const configViewEngine = (app) => {

    // cấu hình đường link static ( ảnh , video , .. chỉ đc lấy trong folder src/public)
    app.use(express.static('./src/public'))

    // thiết lập cho node js hiểu file ejs 
    app.set('view engine', "ejs")

    // thiết lập cho phép tự tìm file ejs trong folder views
    app.set('views', './src/views')

}

export default configViewEngine