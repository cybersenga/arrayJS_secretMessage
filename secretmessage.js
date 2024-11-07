/* Project - Using array methods, you will transform an array of strings into a secret message! 
You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.*/

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//Step 1
secretMessage.pop();
console.log(secretMessage);

//Step 2
console.log(secretMessage.length);

//Step 3
secretMessage.splice(23, 2, "to", "program");
console.log(secretMessage);

//step 4
console.log(secretMessage.indexOf("easily"));

secretMessage.splice(7, 1, "right");
console.log(secretMessage);

//Step5
secretMessage.shift();
console.log(secretMessage);

//Step 6
secretMessage.unshift("Programming");
console.log(secretMessage);

//Step 7
console.log(secretMessage.indexOf("get"));
secretMessage.splice(6, 5, "know");
console.log(secretMessage);

//Step 8
console.log(secretMessage.join(" "));
