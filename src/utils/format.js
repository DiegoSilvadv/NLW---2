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


function getWeekdays(weekdayNumber) {
    const position = + weekdayNumber - 1
    return subjects [position]
}

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects [position]
}

function convertHoursToMinutes(time) {
    const [ hour, minutes ] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes,
    getWeekdays
}
    
