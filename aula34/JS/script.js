const people = {
    name: "Pedro",
    curse: "JavaScript",
    channel: "CFB Cursos",
    lessons: {
        lesson1: "Introdução",
        lesson2: "Variáveis",
        lesson3: "Condifionais"
    }
}

const stringJSON = JSON.stringify(people)
const objectJSON = JSON.parse(stringJSON)

console.log(people)
console.log(stringJSON)
console.log(objectJSON)