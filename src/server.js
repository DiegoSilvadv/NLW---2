
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "12665523125", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório epor mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Diego Silva", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "12665523125", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório epor mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação físi",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects [position]
}


function pageLanding(req,res) {
    return res.render("index.html")
}

function pageStudy(req,res) {
    //req.query pega informações da url é um objeto
    const filter = req.query

    //render pode renderizar o hmtl passando valores como o {proffys}
    return res.render("study.html", {proffys, filter, subjects, weekdays})
}

function pageError(req,res) {
    return res.sendFile(__dirname + "/views/error.html") 
}

function pageGiveClasses(req,res) {
    //adicionar dados a lista de proffys
    const data = req.query

    //object.key pega a variavel data e trasforma em um array para verificarmos se esta vazio ou se tem alguma coisa
    //iremos ver o tamanho do array se for  > 0 é por que tem algo
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject);

        //push colocar dados em um objeto nosso caso no proffys
        proffys.push(data)
        //redirecionamento de página 
        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", { subjects, weekdays})
}

function pageLogin(req,res) {
    return res.sendFile(__dirname + "/views/login.html")
}

//servidor
const express = require('express')
const server = express()


//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//inicio e configuração do servidor
//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/error", pageError)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses )
.get("/login", pageLogin)
//start do servidor
.listen(5500)

