function checkAge() {
    let age = prompt("Enter your age");
    if (age >= 25) {
        alert("User is 25 years old and up");
    }
    else {
        alert("User is below 25 years old")
    }
}

function checkNumber() {
    let number = prompt("Enter a number");
    if(number < 100) {
        alert("The number entered is less than 100");
    }
    else {
        alert("The number is 100 or greater");
    }
}

function printNumbers() {
    let output= "";
    for(let i = 0; i <= 30; i++) {
        output += i + "\n";
    }
    document.getElementById("output").textContent = output
}

function printEvenNumbers() {
    let output= "";
    for(let i = 0; i <= 40; i++) {
        if(i % 2 == 0) {
            output += i + "\n";
        }
    }
    document.getElementById("output").textContent = output;
}

function printMultiples() {
    let output = "";
    for(let i = 40; i >= 10; i--) {
        if(i % 3 == 0) {
            output += i +"\n";
        }
    }
    document.getElementById("output").textContent = output;
}