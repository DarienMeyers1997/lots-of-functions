/*
function name is sayHi
parameters: nameStr -string

return string


concatenation or interpolation
*/

function sayHi(name){
    let newStr = `Hi, ${name}`
    return newStr
}

console.log(sayHi("Darien"))
console.log(sayHi("Jack"))
console.log(sayHi("Daniels"))

/*
function - bigStr
parameters: str1, str2
return string

if eqaul - dont return, just consol.log that they are equal
if str1 is bigger than str2 return str1
if str2 is bigger than str1 return str2
.length used to determine how big each string is
*/




function bigStr(str1,str2){
    if(str1.length > str2.length){
       return str1
    }else if(str2.length > str1.length){
        return str2
    }else if(str1.length === str2.length){
        console.log(`${str1} is equal to ${str2}`)
    }
  
}

console.log(bigStr("blue", "red"))
console.log("taco","Tuesday")
bigStr("dog", "cat")


/*
function - bigNumber
parameters - num1, num2
return which one is greater
otherwise tell user the nummbers are equal

*/


function bigNum(num1, num2){
    if(num1 > num2){
        return num1
    }else if(num2 > num1){
        return num2
    }else if(num1 === num2){
        console.log(`${num1} is equal to ${num2}`)
    }
}

console.log(bigNum(23,300))
console.log(bigNum(420,12))
bigNum(2,2)



/*
function fiveMore
parameter - array if numbers [nums array]
add 5 to each odd number inthe array
loop
numsArray.length
return modified array

*/


function fiveMore(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        if(numsArray[i] % 2 !== 0){
            numsArray[i] += 5
        }
        
    } return numsArray
   
}

console.log(fiveMore([1,2,3,4]))
console.log(fiveMore([1,3,5,7]))
console.log(fiveMore([2,22,44,66]))


/*
function - arraySummer
perameter - numArray
add each number inside the array together in order to get a total




*/


function arraySummer(numArray){
    let sum = 0
    for(i = 0; i < numArray.length; i++){
        sum += numArray[i]
    }
return sum
   
}

console.log(arraySummer([1,2,3,4]))


/*



if(num % n === 0)
console.log(num)

*/


function everyDivisible(n){
    if(n < 10){
        
    for(let num = 1; num <= 100; num++ ){
        if(num % n === 0){
            console.log(num)
        }
    }
}
}

everyDivisible(5)

