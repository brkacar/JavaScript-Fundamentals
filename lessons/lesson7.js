//loops

//const { forEachRight } = require("cypress/types/lodash")

//for loop 

for (let i = 0; i < 5; i++) {
    console.log('HI ' + i)    
}

// for of loop
var cars=['Volvo','Toyota',"Tesla"]

for (let car of cars) {
    console.log(car)
    if(car==='Toyota'){
        break
    }
}

//ES6 syntax for each loop

cars.forEach(car=>{
     console.log(car)  
}
)

