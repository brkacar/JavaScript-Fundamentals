//objects
var customer={
    firstName:'JD',
    lastName:"Sam",
    cars:['Volvo','Toyota',"Tesla"]
}

console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer['lastName'])

customer['lastName']='Silver'
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays --ordered-* index 0 1 2
var car=['Volvo','Toyota',"Tesla"]
car[1]='BMW'
console.log(car[0])
console.log(car[1])

console.log(customer.cars[1])