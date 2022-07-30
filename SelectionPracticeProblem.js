console.log("Welcome to Selection Practice Problem")

//Selection Practice Problems with case statements

//Printing Digit 
let Num = Math.floor(Math.random()*10)%10;
console.log("Number : "+ Num);

switch(Num){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid number");
        break;
}

//Printing Random day of the week
let DayNumber = Math.floor(Math.random()*7) + 1;
console.log("Number : "+DayNumber);
switch(DayNumber){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number");
        break;
}


//Display Unit Tens thousands so on ....
let Power = Math.floor(Math.random()*10)%7;
let Numb = 10**power;
console.log("Number : "+Numb);
switch(Numb){
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("One Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    default:
        console.log("Not in Range");
        break;
}

