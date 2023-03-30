var asian = [
  "be still",
  "smile",
  "work hard",
  "i love you",
  "i'm proud of you",
  "good girl",
  "don't forget to do the dishes",
  "Listen to your parents",
  "Make your parents happy",
  "Take care of your siblings",
  "Be still",
  "Be small",
  "Be fragile",
  "Be skinny",
  "Be obedient",
  "Be cute",
  "Do the dishes",
  "Help your dad",
  "Be modest",
  "Cover up",
  "Big eyes",
  "Tall nose",
  "Pale skin",
  "Don’t be tan",
  "Be smart",
  "Get A’s",
  "Be the best",
  "Small face",
  "Don’t be gay",
  "Don’t be fat",
  "No tattoos ",
  "No piercings",
  "be docile",
  "do well in school",
  "respect your elders",
  "be petite",
  "you are not smart enough",
  
];

var woman = [
  "Be sexy",
  "Take care of your siblings",
  "Be mysterious",
  "Be hot",
  "Cover up",
  "Be pretty",
  "Show it off",
  "Big ass",
  "Big tits",
  "Small waist",
  "Make boys like you",
  "Be quiet",
  "Be fun",
  "Be white",
  "Be young",
  "No wrinkles",
  "Be toned",
  "Be fit",
  "Smile",
  "Lose weight",
  "Be friendly but  don’t lead them on",
  "listen",
  "be polite",
  "be accomodating",
  "be nurturing",
  "be a good mother",
  "be a good wife",
  "make dinner",
  "you are not pretty enough",
  
];

var american = [
  "Be free",
  "Be brave",
  "Follow your dreams",
  "Speak up",
  "Be loud",
  "Work hard",
  "Do what you want",
  "Be white",
  "Succeed",
  "Live far away",
  "Be  a leader",
  "White picket fence",
  "White house",
  "2 and a half kids and a dog",
  "Live fast die young",
  "Yolo",
  "Get tattoos",
  "Get  piercings",
  "Make small talk",
  "Be friendly",
  "Split the bill",
  "Ask why",
  "Move away  from your parents",
  "Listen to the police",
  "be confident",
  "be strong",
  "be strong",
  "be strong",
  "rock n roll",
  
];

var index = 0;
var asianVoice, womanVoice, americanVoice;

function voiceReady() {
  console.log(speech.voices);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
 
  asianVoice = new p5.Speech(voiceReady);
  womanVoice = new p5.Speech(voiceReady);
  americanVoice = new p5.Speech(voiceReady);
  asianVoice.setRate(random(3));
  womanVoice.setRate(random(3));
  americanVoice.setRate(random(3));

}

function draw() {
   //title
  noStroke();
  textSize(20);
  //asian
  fill(255, 255, 0);
  rect(0, 0, textWidth(" asian  "), 40);
  //american
  fill(0, 0, 255);
  rect(textWidth("asian "), 0, textWidth("american ")+40, 40);
  //woman
  fill(255, 0, 255);
  rect(textWidth("asian ")+textWidth("american  "), 0, textWidth("woman")+10, 40);
 
  fill(0);
  text("asian", 0, 20);
  fill(255);
  text("american", 60, 20);
  text("woman", textWidth("asian")+textWidth("american")+20, 20);

  //instructions
  fill(0);
  text("click to randomize", width-textWidth("click to randomize"), 20);

  
  //pixel distortion
  let x1 = random(width);
  let y1 = random(height);
  let x2 = round(x1 + random(-10, 10));
  let y2 = round(y1 + random(-10, 10));
  set(x2, y2, get(x1, y1, 100, 100));
  
  //voice random
  asianVoice.setRate(random(3));
  womanVoice.setRate(random(3));
  americanVoice.setRate(random(3));
  


  var asW = textWidth(asian[index]);
  var woW = textWidth(woman[index]);
  var amW = textWidth(american[index]);
  var h = 15;

  //asian
  fill(255, 255, 0);
  rect(mouseX, mouseY - h, asW, h);
  fill(0);
  textSize(h);
  text(asian[index], mouseX, mouseY);
  asianVoice.speak(asian[index]);

  //woman
  fill(255, 0, 255);
  rect(mouseX + 10, mouseY, woW, h);
  fill(255);
  text(woman[index], mouseX + 10, mouseY + h);
  womanVoice.speak(woman[index]);
  asianVoice.speak(asian[index]);
  americanVoice.speak(american[index]);

  //american
  fill(0, 0, 255);
  rect(mouseX, mouseY + h, amW, h);
  fill(255);
  text(american[index], mouseX, mouseY + h * 2);
  americanVoice.speak(american[index]);
  asianVoice.speak(asian[index]);
  womanVoice.speak(woman[index]);
  
}

function mousePressed() {
  posX = mouseX;
  posY = mouseY;

  //asian
  index = floor(random(asian.length));
  console.log(index);

  if (index == asian.length) {
    index = 0;
  }
  text(asian[index], posX, posY);

  //woman
  index = floor(random(woman.length));
  console.log(index);

  if (index == woman.length) {
    index = 0;
  }
  text(woman[index], posX, posY);

  //american
  index = floor(random(american.length));
  console.log(index);

  if (index == american.length) {
    index = 0;
  }
  text(american[index], posX, posY);
    updatePixels();

}
