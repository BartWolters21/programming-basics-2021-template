console.log('JavaScript is working!')
removeFromString();

function isItEven() {
    const number = 2;
    if (number % 2 === 0) {
        console.log("The number is even.")
    } else {
        console.log("The number is not even.")
    }
}

function removeFromString() {
    const string = "Programming is not so cool";
    const removed = string.replace("not ", "")
    console.log(removed)
}