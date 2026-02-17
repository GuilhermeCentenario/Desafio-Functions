let invoice = {
    name: "Jirium",
    age: 30,
    products: {
        0: ["Mouse XPTO", 189], 
        1: ["Microfone", 299],
        2: ["Tablet", 1100],
        3: ["Monitor", 890]
    },

}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é: ${invoice.name}`)
    console.log(`A idade é: ${invoice.age}`)
    console.log(`-----------------------------------------------------------`)
    for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(`O produto é: ${productName} e custa R$${productPrice}`)
    }
}