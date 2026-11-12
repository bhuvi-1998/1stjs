// 1. Declare variables to store your name, age, salary, and student status. 
//      Display all the values and their data types.


let name = 'bhuvi'
let age = '28'
let salary = 15000
let student_status = 'acctive'


console.log(typeof name,name)
console.log(typeof age , age)
console.log(typeof salary, salary)
console.log(typeof student_status, student_status)


// 2. Create variables with string, number, boolean, undefined, and null values. 
//      Display their values and data types.

let my_name = 'bhuvi'
let my_age = 23
let married = false
let skills
let django = null

console.log(typeof my_name, my_namename)
console.log(my_ageage, typeof my_ageage)
console.log(married, typeof married)
console.log(skills, typeof skills)
console.log(django, typeof django)

// 3. Take the user's name as input and display a personalized welcome message.


let ur_name = prompt('enter your name')

alert('wellcome' + ' ' + ur_name)


// 4. Take two numbers from the user and display their sum, difference, product, quotient, and remainder.

let ac = Number(prompt('enter a number : '))
let bc = Number(prompt('enter b number : '))

console.log(ac+bc)
console.log(ac-bc)
console.log(ac*bc)
console.log(ac/bc)
console.log(ac%bc)

// 5. Take a number from the user and check whether it is even or odd.

let aa = Number(prompt('enter a number : '))
if (aa%2 == 0)
    {
        console.log('even number');
    }
else
    {
        console.log('odd number');
    }

// 6. Take two numbers from the user and display the greater number.

let ab = Number(prompt('enter a number : '))
let bb = Number(prompt('enter b number : '))

if (ab>bb){
    console.log('a is grater number')

}
else{
    console.log('b is grater number')
}


// 7. Take marks in three subjects and calculate the total marks and average.

let ad = Number(prompt('enter a number : '))
let bd = Number(prompt('enter b number : '))
let cd = Number(prompt('enter c number : '))

let total = ad+bd+cd
let average = ad+bd+cd / 3
console.log(total)
console.log(average)


// 8. Take a person's age and check whether they are eligible to vote.


let ae = Number(prompt('enter a person age : '))
if (ae>=18){
    console.log('eligible for vote')
}
else{
    console.log('not eligible for vote')
}

// 9. Take a number from the user and check whether it lies between 10 and 100.


let af = Number(prompt('enter a number : '))
if (af <100 && af>10)
{
    console.log('a is in between 10 and 100');
}
else
{
    confirm.log('a is not in between 10 and 100');
}


// 10. Swap the values of two variables using JavaScript.

let ag = 10
let bg = 20
let temp = a

ag = bg
bg = temp
console.log(ag)
console.log(bg)


// 11. Take the user's birth year and calculate their approximate age.

let ah = Number(prompt('enter your birth year : '))
console.log('your age is '+ (2026-ah))

// 12. Take two numbers from the user and display their sum.


let a = Number(prompt('enter a number : '))
let b = Number(prompt('enter b number : '))

console.log(a+b)