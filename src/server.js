const express = require('express')
const server = express()
//express vai pegar e exibir na tela os arquivos estaticos que estão dentro da pasta public do projeto
server.use(express.static("public"))


//arrow function é mais resumida usando o =>
//rotas da aplicação
.get("/", (req,res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/error", (req,res) => {
    return res.sendFile(__dirname + "/views/error.html")
})
.get("/study", (req,res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req,res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})
.get("/login", (req,res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.listen(5500)

