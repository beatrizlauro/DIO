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

//Exemplo de JSON
//Antes:
let name = Jimin
let age = 28
let products = ["mouse 2xwm", "teclado mecânico", "monitor"]
let productsValues = [29.90, 129.90, 899.90]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
    console.log("O comprador é " + name)
    console.log("A idade é " + idade)
    console.log("====================")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues)
}

//Depois w/ JSON:
let invoice = {
    name: "Jimin",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["teclado mecânico", 129.90],
        2: ["monitor", 899.90]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`====================`)

    for(const index in invoice.products){
        let[productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}