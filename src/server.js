

//servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, pageLogin, pageError, saveClasses} = require('./pages')


//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//receber dados do req.body

//inicio e configuração do servidor

server
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/error", pageError)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses )
.post("/save-classes", saveClasses )
.get("/login", pageLogin)
//start do servidor
.listen(5500)

