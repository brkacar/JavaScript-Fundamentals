//declarative function
function helloOne(){
    console.log('Hello one!')
}
helloOne()

//Ananoymous function

var hellotwo=function(){
    console.log('Hello two!')
}
hellotwo()

//ES6 funtion syntax or arrow funtion

var helloThree=()=>{
    console.log('Hello three!')    
}
helloThree()

//function with argument

function printName(name,lastName){
    console.log(name+' '+lastName)
}

printName('JF','Smith')

//funtion with return
function multiplyByTwo(number) {
     var result =number*2
    return result
}
var myResult=multiplyByTwo(20)
console.log(myResult)

//import function
import {printAge} from '../helpers/printHelper.js'
printAge(5)

//import everything from a module
import * as Helper from '../helpers/printHelper.js'
Helper.printAge(10)