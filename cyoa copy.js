// variables
var name = "";
var messages = [];
var choices;
var answer;
var spin = 0;
var hang = 0;
var apple = false;
var applePie = false;
var poisonedApple = false;
var candy = false;



//check for UI Do not edit
try {
    var web = document.getElementById("border");
} catch (e) {
    if (e.name == "ReferenceError") {}
}

if (web == undefined) {
    newLine = '"     n';
    console.log("no web");
    var tools = require('./cmdHelper');
    var askQuestion = tools.askQuestion;
    var delayText = tools.delayText;
    var story = tools.story;
    module.exports.checkAnswers = checkAnswers;
} else {
    newLine = '</br>';
    console.log("web");
    setup();
}



//game

function checkAnswers(answer) {
    if (answer == "Think some more") {
        thinkSomeMore();
    } else if (answer == "go in" || answer == "go into the forest") {
        enterForest();
    } else if (answer == "go home" || answer == "ignore it and go home") {
        homeEarly();
    } else if (answer == "Candy house") {
        goCandy();
    } else if (answer == "Fruit vender") {
        fruitVender();
    } else if (answer == "Field") {
        field();
    } else if (answer == "spin in a circle") {
        spinInCircle();
    } else if (answer == "Hang out here") {
        hangOut();
    } else if (answer == "eat a mushroom") {
        eatAMushroom();
    } else if (answer == "offer it an apple") {
        offerItAnApple();
    } else if (answer == "offer it the poisoned apple") {
        offerItAPoisonedApple();
    } else if (answer == "Look around") {
        lookAround();
    } else if (answer == "offer it the apple pie") {
        offerItTheApplePie();
    } else if (answer == "offer it the candy") {
        offerItTheCandy();
    } else if (answer == "talk to it") {
        talkToIt();
    } else if (answer == "hide") {
        hide();
    } else if (answer == "hide in a bush") {
        hideInBush();
    } else if (answer == "turn Around") {
        turnAround();
    } else if (answer == "stay quite") {
        stayQuite();
    } else if (answer == "taken home") {
        takenHome();
    } else if (answer == "go to the forest") {
        forest();
    } else if (answer == "faerie") {
        takenFaerie();
    } else if (answer == "small apple" || answer == "large apple") {
        getApples();
    } else if (answer == "apple pie") {
        getApplePie();
    } else if (answer == "poisoned apple") {
        getPoisonedApple()
    } else if (answer == "buy nothing go back") {
        forest();
    } else if (answer == "yes enter") {
        candyHouse();
    } else if (answer == "no run") {
        forest();
    } else if (answer == "talk to her") {
        talkToHer();
    } else if (answer == "steal the candy") {
        stealTheCandy();
    } else if (answer == "run away") {
        forest();
    } else if (answer == "offer her the apple") {
        witchEatApple();
    } else if (answer == "grab candy and run") {
        grabCandyandrun();
    } else if (answer == "run away") {
        runAway();
    } else if (answer == "tea") {
        tea();
    } else if (answer == "offer her the apple") {
        witchEatApple();
    } else if (answer == "fight free")
        fightTheWitch();
}


// start

story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before"     
+  newLine + "Come here little one, Come here"     
+  newLine + "You can't place the voice, but there is something familiar about it. What do you do?");

choices = ["Think some more", "go into the forest", "ignore it and go home"];
askQuestion(choices);





// Places
function thinkSomeMore() {
    story("You think about it some more and are sure this forest was not here yesterday."
     + newLine + "Where did it come from and what is calling out to you?"
     + newLine + "What do you want to do?");
    choices = ["go in", "go home"];
    askQuestion(choices);

}

function enterForest() {
    story("you enter the forest and soon become hopefully lost."
     + newLine + "While you can't find your way out you do see a few places of interest.");
    forest();
}

function goCandy() {
    story("Did you learn nothing as a kid?"     
    +  newLine + "You are really going to go a house made out of candy in a mysterious dark forest?"     
    +  newLine + "really?");

    choices = ["yes enter", "no run"];
    askQuestion(choices);

}

function hangOut() {
    hang = hang + 1;
    if (hang == 3) {
        story("Wow you are a patient person."     
    +  newLine + "Do you plan to hang out here all day?" + newLine + "");
        forest();
    } else if (hang == 4) {
        story("Is your name Hamlet?"     
    +  newLine + "You know trying something is better than doing nothing all day." + newLine + "");
        forest();
    } else if (hang == 5) {
        story("Ok you do you." + newLine + "");
        forest();
    } else {
        story("You hang out here a while.");
        story("birds chirp, light shines through the leaves and you are a minute older." + newLine + "");
        forest();
    }
}

function spinInCircle() {
    spin = spin + 1;
    if (spin == 3) {
        story("Why are you doing that?"     
        + newLine + " It makes me a little nauseous just to watching you" + newLine + "");
        setTimeout( forest,5000);
    } else if (spin == 4) {
        story("Seriously, please stop"     
        + newLine + "I can't keep watching this" + newLine + "");
        setTimeout( forest,5000);
    } else if (spin == 5) {
        story("Oh god I have to go" + newLine + "");
        setTimeout( forest,5000);
    } else if (spin > 5) {
        story("We are sorry but the narrator for this bit went home sick."+  newLine + "");
        setTimeout( forest,5000);
    } else {
        story("You let you arm fly freely at your side as you spin in a circle."     
        +  newLine + "Around and around you go as the world blurs in front of you"     
        +  newLine + "you get dizzy and fall to the ground"     
        +  newLine + "you take a moment to gather your thoughts then you stand back up "+  newLine + "");
        setTimeout( forest,5000);
    }
}

function forest() {
    story("There is a house made of candy"     
    +  newLine + "There is a fruit vender"     
    +  newLine + "There is a small opening in the trees with a ring of mushroom in the middle");

    choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
    askQuestion(choices);

}

function field() {
    story("you come across an open field and in the middle there is a ring of mushrooms"     
    +  newLine + "it feels like you are being watched"     
        +  newLine + "what do you do?");

    choices = ["eat a mushroom", "Look around", "hide in a bush", "go to the forest"];
    askQuestion(choices);

}

function eatAMushroom() {
    messages = ["You really should not eat mushrooms you can't identify.",
        "you start not to feel well",
        "I would like to say you pass away peacefully, but there is no way to feel peaceful with that much vomiting.",
        "now the pixie will need to hope for a good rain",
        "ugg, the smell is something I won't soon forget."
    ];
    delayText(messages, 1000);

}

function lookAround() {
    story("You examine the clearing closely and think you saw something move."     
    +  newLine + "it was smaller than a squirrel and could fly"     
    +  newLine + "you think it might be a pixie, but how to lure him out?");
    field();
}

function hideInBush() {
    story("You find a place to hid inside a bush and look for whatever it was that you saw."     
    +  newLine + "from behind you, you hear"     
    +  newLine + "what you doing?"     
    +  newLine + "what do you do?");
    choices = ["talk to it", "turn around", "stay quite"];
    if (apple) {
        choices.push("offer it an apple")
    }
    if (poisonedApple) {
        choices.push("offer it the poisoned apple")
    }
    if (applePie) {
        choices.push("offer it the apple pie")
    }
    if (candy) {
        choices.push("offer it the candy")
    }
    askQuestion(choices);

}

function stayQuite() {
    messages = ["so your too good to talk to me huh",
        "big old person too proud to talk to a pixie",
        " you hear the pixie fly away in disgust"
    ];
    delayText(messages, 3000, field);

}

function offerItAnApple() {
    story("apples, I can get apples anywhere");
    field();
}

function offerItAPoisonedApple() {
    messages = ["apples, I can get apples anywhere",
        "He eyes the apple closely",
        "wait I sense something special about that one.",
        "he takes the apple and starts to eat",
        "this is good, thanks",
        "because you gave me this great apple I will help you out.",
        "I know of a secret way out of the forest and can lead you.......",
        "At that the pixie dies",
        "without his help you will be stuck in this forest forever.",
        "hope you like apples"
    ]

    delayText(messages, 1000);
}

function offerItTheApplePie() {
    messages = ["the pixie looks at the apple and licks his lips.",
        "That looks delicious.",
        "the pixie attacks the pie flying right into the center",
        "You are scared to put you hand anywhere near the tornado of pixie, apples and crust ",
        "after a few minutes the pixie comes to a rest in the middle of the pie. A look of satisfaction on his face.",
        "that was great, thanks",
        "that is almost as good as candy",
        "let me show you the way out of as a gesture of thanks.",
        "With that the pixie leads you out to safety"
    ]
    delayText(messages, 1000);
}

function turnAround() {
    story("you turn around just to see the pixie fly away."     
        +  newLine + "your sudden movement scared him off");
    field();
}

function offerItTheCandy() {
    story("You offer him a piece of candy and he gets visibly excited"     
        +  newLine + "candy is my favorite"     
        +  newLine + "he grabs you whole bag of candy and flies off faster than you can react."     
        +  newLine + "you just start thinking you have been mugged by a fariy when you feel him land on your shoulder"     
        +  newLine + "the gift of the candy was almost too much to accept."     
        +  newLine + "fortunately I have something to offer you."     
        +  newLine + "I offer you this choice come back with me to faerie and you will live forever in a party that never stops."     
        +  newLine + "or if you want I can send you home");
    choices = ["home", "faerie"];
    askQuestion(choices);

}

function takenHome() {
    story("the pixie leads you through the forest until you start to see things you recognize"     
        +  newLine + "you turn around to thank the pixie only to see no pixie or forest, just the park you can remember");
}

function talkToIt() {
    story("to do");
}

function takenFaerie() {
    story("to do");

}

function fruitVender() {
    story("You come to an old man selling fruit"     
    +  newLine + "he looks you up and down and starts talking to you"     
    +  newLine + "hey there little one would you like some apples?"     
    +  newLine + "I have many kinds of apples."     
    +  newLine + "I have big apples, small apples, apple pie and poisoned apples"     
    +  newLine + "what can I get for you?");

    choices = ["small apple", "large apple", "apple pie", "poisoned apple", "buy nothing go back"];
    askQuestion(choices);

}

function getApples() {
    story("you get a nice shiny apple. It might make a good lunch later.");
    fruitVender();
}

function getApplePie() {
    story("you get nice Apple Pie. It smells amazing you can't wait to eat it, but should probably wait until later.");
    applePie = true;
    fruitVender();
}

function getPoisonedApple() {
    story("you get a poisoned Apple. It may come in handy.");
    poisonedApple = true;
    fruitVender();
}

function candyHouse() {
    story("You see a house completely made of candy.  There are candy cane window frames and the smell of the gingerbread wall is overwhelming"     
    +  newLine + "You see a nice old lady inside preparing dinner"     
    +  newLine + "There is a large pile of candy on the table"     
    +  newLine + "What do you want to do?");
    choices = ["talk to her", "steal the candy", "run away"];
    askQuestion(choices);


}

function talkToHer() {
    story("Well hello little one. You look good enough to eat."     
    +  newLine + "Why don't you sit down and have some tea?");
    choices = ["tea", "run away"];
    if (poisonedApple) {
        choices.push("offer her the apple");
    }
    askQuestion(choices);

}

function tea() {
    story("You have a nice cup of tea while the old lady starts the oven."     
    +  newLine + "After a few minutes you start feeling drowsy"     
    +  newLine + "You fall into a sleep you never wake up from. Don't worry the old lady will eat well tonight.");
}

function runAway() {
    story("You try and run but she is fast for an old lady"     
        +  newLine + "She grabs you and start forcing you towards the oven"     
        +  newLine + "She is strong. To strong to fight off."     
        +  newLine + "I would explain what she does next but I am try to keep this pg13."     
        +  newLine + "Needless to say the witch will eat well tonight.");
}

function stealTheCandy() {
    story("You slowly creep into the room"     
    +  newLine + "All is going well when your foot comes down on the loose board and a small creaking sound comes forth"     
    +  newLine + "What do you do");

    choices = ["hide", "grab candy and run"]
    askQuestion(choices);

}

function hide() {
    story("You hide behind a chair just before she turns around"     
    +  newLine + "She eyes the room.  You know there is no way to get to the candy without her seeing" + newLine + "");
    candyHouse();
}

function grabCandyandrun() {
    story("you grab the candy, but she is fast for an old lady"     
        +  newLine + "she grabs you arm and start pulling you towards the oven");
    if (poisonedApple) {
        story("what do you do?");
        choices = ["offer her the apple", "fight free"];
        askQuestion(choices);
    } else {
        fightTheWitch();
    }
}

function fightTheWitch() {
    story("She is strong. To strong to fight off."     
    +  newLine + " I would explain what she does next but I am try to keep this pg13."     
    +  newLine + "Needless to say the witch will eat well tonight.");
}

function witchEatApple() {
    messages = ["You offer her the apple and she laughs",
        "I will eat your apple while the oven warm up. You are going to be tasty",
        "She takes a big bite out of the apple and smiles",
        "It only takes a few moments before she fall down",
        "You grab the candy and walk out" + newLine + ""
    ];

    delayText(messages, 1000, forest);
    candy = true;

}

function homeEarly() {
    var messages = ['You ignore it and walk home.',
        'Nothing exciting happens to you one the way.',
        "That was a very boring story, but you must be a boring person for having chosen to go home.",
        "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
        "To each his own I guess."
    ];
    delayText(messages, 2000);

}


if (web == undefined) {
    module.exports.checkAnswers = checkAnswers;
}