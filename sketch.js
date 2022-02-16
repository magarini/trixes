var words = ["","If you give time to yourself to imagine which hairstyle you need, maybe you will give time to imagine what life you need", "Overthinking is not a problem. But if you are in a dancefloor, you better dance", 
"You need chaos in your soul to give birth to a dancing star, Friedrich Nietzsche",
 "Sooner or later you’ll understand that the pain that you feel is not your problem. Your problem is that this pain will end soon.", 
 "If you ain’t comfortable in this chair you’re sitting maybe it’s the chair, but maybe it’s your ass girl.",
 "You gotta love others, in order to truly love yourself",
 "Crying washes the mind",
 "Sometimes it needs a lot more strenth to give up than to continue fighting",
 "You are a strong girl",
 "the moment your ass starts scratching, you can pretend to ignore it, but you know that sooner or later you’ll need to stand up.",
 "Drink more water!",
 "Ask your friends and the answer will come before they answer",
 "If you can’t comb it, cut it",
];

var index = 0;

function setup() {
  createCanvas(windowWidth, 300);
  button = createButton('get advice');
}

function draw() {

  background(20,40,161);
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text(words[index], width/2, height/2);

 
//   button.position(width/2, 2*height/3);
  button.mousePressed(changeBG);


}
function changeBG() {
    clear();

    index = floor(random(words.length));
    
    console.log(index);
  
    if (index == words.length) {
      index = 0;
  }
}

// function mousePressed() {
//     clear();

//   index = floor(random(words.length));
  
//   console.log(index);

//   if (index == words.length) {
//     index = 0;
//   }
// }
