function happyNewYear(year){
  year = 2021;

  for(i = 10; i > 0; i--){
    console.log(i);
  }

  console.log('Happy New ' + year);

}

factorial(5)
// checks the sum of the array
function factorial(num) {
    let finalNumber = 1;
    for (i = 1; i <= num; i++) {
        finalNumber = finalNumber * i;
    }
    console.log(finalNumber);
}

checkForACharacterInSentence("Test sentence", "t")

// Check for character in the sentence
function checkForACharacterInSentence(sentence, character) {
    const count = sentence.split(new RegExp(character, "gi")).length - 1
    console.log(`Sentence contains "${character}" ${count} times!`)
}