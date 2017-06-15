// Challenge 1
/*
    1- declare a new string
    2- loop for size ammount of times with for loop
    3- in loop:if i % 2 === 0 add a 1 to the string, else add a 0 to the string
    4- return the string
 */
function stringy(size){
    let string = "";
    for(i = 0; i<size; i++){
        if(i % 2 === 0){
            string += 1;
        }else{
            string += 0;
        }
    }
    return string;
}

// Challenge 2
/*
    1- declare a new array
    2- loop while given number is greater that 1
    3- in loop: add to array n % 10
    4- in loop: divide n by 10
    5- return array;
 */
function digits(n){
    let array = [];
    while(n > 1){
        let num = Math.floor(n % 10);
        array.push(num);
        n /= 10;
    }
    return array;
}

// Challenge 3
/*
    1- declare string
    2- declare 2 variables, on for the most recent spot(last2) and one for the spot before that(last1)
    3- loop for given number times
    4- in loop: variable current = last1 + last2
    5- in loop: add current to string with comma after current
    6- in loop:set last1 to last2
    7- in loop: set last2 to current
    8- slice the end of string to get rid of extra comma
    9- return string
 */
function fibonacci(n) {
    let fib = "1,";
    let last1 = 0;
    let last2 = 1;
    for(i = 0; i<n; i++){
       let current = last1 + last2;
        fib += current +",";
       last1 = last2;
       last2 = current;
    }
    fib = fib.slice(0, fib.length-1);
    return fib;
}

// Challenge 4
/*
    1- declare array of month names to translate from js date library to real name
    2- declare new Date(js library)
    3- split given date using spaces, i.e ["June", "15,", "2017"]
    4- check if todays dates(using library) month is greater than the given month, if so return false
    5- check if todays dates(using library) year is greater that the given year, if so return false
    6- check if todays dates(using library) date is greater than the given date, if so return false
    7- if none of the above return false, return true
 */
function checkCoupon(date){
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let d = date.split(" ");
    if(today.getMonth() > monthNames.indexOf(d[0])){
        return false;
    }else if(today.getFullYear() > d[2]){
        return false;
    }else if(today.getDate() > d[1].split(',')[0]){
        return false;
    }else {
        return true;
    }
}

// Challenge 5
/*
    1- split given email by @ sign
    2- declare boolean formatted
    3- formatted is equal to checks:
        check1: input includes @ sign, returns true
        check2: input includes ., returns true
        check3: split email has only 2 parts
        check4: split email index 0 length is greater than 0
        check5: split email index 1 length is greater than 0
        check6: split email index 1, split again at . index 0 length is greater than 0,
        check7: split email index 1, split again at . index 1 length is greater than 0
        check8: split email index 1, split again at . length is greater than 1
    4- if it is formatted, check for symbols
    5- Check for symbols by iterating through split email index 0, comparing each character to a list of unallowed character if any are symbols return false
 */
function validate(email){
    let symbols = "/.,;'[]\\`-=~!#$%^&*()<>?:\"{}|";
   let formatted = email.includes("@")
   && email.includes(".")
   && email.split("@").length===2
   && email.split("@")[0].length>0
   && email.split("@")[1].length>0
   && email.split("@")[1].split('.')[0].length>0
   && email.split("@")[1].split('.')[1].length>0
   && email.split("@")[1].split('.').length>1;
   if(formatted) {
       for (i = 0; i < email.split('@')[0].length; i++) {
            let current = email.split('@')[0][i];
            for(j = 0; j<symbols.length; j++){
                if(current === symbols[j]){
                    return false;
                }
            }
       }
       return true;
   }else{
       return false;
   }
}
var output = stringy(6);
console.log(output);
output = digits(348597);
console.log(output);
output = fibonacci(5);
console.log(output);
output = checkCoupon("June 15, 2014");
console.log(output);
output = checkCoupon("June 16, 2017");
console.log(output);
output = checkCoupon("March 16, 2017");
console.log(output);
output = checkCoupon("July 16, 2017");
console.log(output);
output = validate("July 16, 2017");
console.log(output);
output = validate("komarnickolas@gmail.com");
console.log(output);
output = validate("@gmail.com");
console.log(output);
output = validate("kom@gmailcom");
console.log(output);
output = validate("kom@");
console.log(output);