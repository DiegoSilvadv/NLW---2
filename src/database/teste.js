const Database = require('./db');
const createProffy = require('./createProffy')
//arrow functio
Database.then( async (db) => {
    //inserir dados 
    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "12665523125", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório epor mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }
    proffyValue = {
        name: "Diego ", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "12665523125", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório epor mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }
    classValue = {
        subject: 1, 
        cost: "20", 
    }
    //class_id virá pelo banco de dados, após cadastrarmos a class
    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        classSchedule = 
        {
            weekday: 2, 
            time_from: 520, 
            time_to: 1220
        }
    ] 
    //await createProffy(db, {proffyValue, classValue, classScheduleValues })

    //consultar dados

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor 
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 14;
    `)
    //console.log(selectedClassesAndProffys)

    // O horário que a pessoa trabalha, por exemplo é das 8h - 18h
    //O horário do time_from (8) precisa ser menor ou igual ao horário solicitado
    //O time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 14
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520";
    `)

    console.log(selectClassesSchedule)


})