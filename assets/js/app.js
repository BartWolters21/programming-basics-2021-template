function askName() {
  var person = prompt("Please enter your name.");

  if (person == "Alice") {
    document.getElementById("name").innerHTML =
      "Hello " + person + "! How are you today?";
  } else if (person == "Bob") {
    document.getElementById("name").innerHTML =
      "Hello " + person + "! How are you today?";
  } else {
    document.getElementById("name").innerHTML =
      person + " Wil je zakje chips oeleh?";
  }
}

function bookLog() {
  purchasedBook = true;
  job = "teacher";
  inTrain = false;

  if (purchasedBook && job === "teacher" && !inTrain) {
    console.log("Finally I can enjoy my book!");
  } else {
    console.log("You can't read this.");
  }
}

function gradeStudent(){
    grade = 8;

    if(grade < 6){
        console.log("Insufficient");
    } else if(grade > 6 && grade < 7){
        console.log("Sufficient");
    } else if(grade > 7 && grade < 9) {
        console.log("Good");
    } else if(grade > 9){
        console.log("Excellent");
    }
}

function inputDate(){
    const year = prompt("Please input a year.");
    const month = prompt("Please input the number of a month");
    const date = new Date(year, month, 0).getDate();

    console.log(date);
}