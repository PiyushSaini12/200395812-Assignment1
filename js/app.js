// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

//defining the buttons
let nouns1Button = document.querySelector('#button1');
let varbsButton = document.querySelector('#button2');
let adjectivesButton = document.querySelector('#button3');
let nouns2Button = document.querySelector('#button4');
let placesButton = document.querySelector('#button5');
let surprisesButton = document.querySelector('#surprises');
let resetButton = document.querySelector('#reset');

//All of the arrays which can be used to make the toy.
let nouns1Array = ["The Turkey","Mom","Dad","The dog", "The teacher","The elephant", "The cat"];
let verbsArray = ["Sat on","ate","Danced with", "saw", "doesn't like","kissed"];
let adjectivesArray = ["A funnny","A scary","A goofy", "A slimy", "A barking", "A fat"];
let nouns2Array = ["Goat", "Monkey", "Fish", "Cow", "Frog","Bug","Worm"];
let placesArray = ["on the moon", "on the chair","in my spaghetti", "in my soup", "on the grass","in my shoes"];

/* Functions
-------------------------------------------------- */
function creatingSurpriseSentence(){
	let nouns1 = randomWordInArray(nouns1Array);
	let verbs = randomWordInArray(verbsArray);
	let adjectives = randomWordInArray(adjectivesArray);
	let nouns2 = randomWordInArray(nouns2Array);
	let places = randomWordInArray(placesArray);

//Constructing the surprise Sentence 
	let surpriseSentence = nouns1+ " "+verbs+" "+adjectives+" "+nouns2+" "+ places;
	speakNow(surpriseSentence);
}
function resetSentence(){
	surpriseSentence = "";
}
function randomWordInArray(array){
	return array[Math.floor(Math.random()*array.length)];
}
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
nouns1Button.onclick = function() {
	let nouns1 = randomWordInArray(nouns1Array);
	speakNow(nouns1);
}
varbsButton.onclick = function() {
	let verbs = randomWordInArray(verbsArray);
	speakNow(verbs);
}
adjectivesButton.onclick = function() {
	let adjectives = randomWordInArray(adjectivesArray);
	speakNow(adjectives);
}
nouns2Button.onclick = function() {
	let nouns2 = randomWordInArray(nouns2Array);
	speakNow(nouns2);
}
placesButton.onclick = function() {
	let places = randomWordInArray(placesArray);
	speakNow(places);
}
surprisesButton.addEventListener('click', creatingSurpriseSentence);

resetButton.addEventListener('click',resetSentence);

