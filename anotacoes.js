// Interpolação de strings
createStringConnection("db_products", "BTS", "2013")

function createStringConnection(databaseName, user, pass){
    console.log(`create:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}


// Split em js

let userName = getFirstName("Jimin-Park", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Jungkook Jeon", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}