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
    if (answer == "think some more") {
        thinkSomeMore();
    } else if (answer == "go in" || answer == "go into the forest") {
        enterForest();
    } else if (answer == "go home" || answer == "ignore it and go home") {
        homeEarly();
    } else if (answer == "candy house") {
        goCandy();
    } else if (answer == "fruit vender") {
        fruitVender();
    } else if (answer == "field") {
        field();
    } else if (answer == "spin in a circle") {
        spinInCircle();
    } else if (answer == "hang out here") {
        hangOut();
    } else if (answer == "eat a mushroom") {
        eatAMushroom();
    } else if (answer == "offer it an apple") {
        offerItAnApple();
    } else if (answer == "offer it the poisoned apple") {
        offerItAPoisonedApple();
    } else if (answer == "look around") {
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
    } else if (answer == "turn around") {
        turnAround();
    } else if (answer == "stay quiet") {
        stayQuite();
    } else if (answer == "get taken home") {
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
    } else if (answer == "buy nothing and go back") {
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

story("One day you are on your way home from school, and you hear a whisper coming from a dark forest you never remember seeing before." +
    newLine + "Come here little one. Come here." +
    newLine + "You can't place the voice, but there is something familiar about it. What do you do?");

choices = ["think some more", "go into the forest", "ignore it and go home"];
askQuestion(choices);





// Places
function thinkSomeMore() {
    story("You think about it some more and are sure this forest was not here yesterday." +
        newLine + "Where did it come from, and what is calling out to you?" +
        newLine + "What do you want to do?");
    choices = ["go in", "go home"];
    askQuestion(choices);

}

function enterForest() {
    story("You enter the forest and soon become hopefully lost." +
        newLine + "While you can't find your way out, you do see a few places of interest.");
    forest();
}

function goCandy() {
    story("Did you learn nothing as a kid?" +
        newLine + "You are really going to go a house made out of candy in a mysterious dark forest?" +
        newLine + "Really?");

    choices = ["yes enter", "no run"];
    askQuestion(choices);

}

function hangOut() {
    hang = hang + 1;
    if (hang == 3) {
        story("Wow, you are a patient person." +
            newLine + "Do you plan to hang out here all day?" + newLine + "");
        forest();
    } else if (hang == 4) {
        story("Is your name Hamlet?" +
            newLine + "You know, trying something is better than doing nothing all day." + newLine + "");
        forest();
    } else if (hang == 5) {
        story("Ok, you do you." + newLine + "");
        forest();
    } else {
        story("You hang out here a while.");
        story("Birds chirp, light shines through the leaves, and you are a minute older." + newLine + "");
        forest();
    }
}

function spinInCircle() {
    spin = spin + 1;
    if (spin == 3) {
        story("Why are you doing that?" +
            newLine + " It makes me a little nauseous just watching you." + newLine + "");
        setTimeout(forest, 5000);
    } else if (spin == 4) {
        story("Seriously, please stop." +
            newLine + "I can't keep watching this." + newLine + "");
        setTimeout(forest, 5000);
    } else if (spin == 5) {
        story("Oh, God! I have to go." + newLine + "");
        setTimeout(forest, 5000);
    } else if (spin > 5) {
        story("We are terribly sorry for any delay this may have caused, but the narrator for this bit went home sick." + newLine + "");
        setTimeout(forest, 5000);
    } else {
        story("You let your arms fly freely to the sides as you spin in a circle." +
            newLine + "Around and around you go as the world blurs in front of you." +
            newLine + "You get dizzy and fall to the ground." +
            newLine + "You take a moment to gather your thoughts; then you stand back up." + newLine + "");
        setTimeout(forest, 5000);
    }
}

function forest() {
    story("There is a house made of candy." +
        newLine + "There is a fruit vender." +
        newLine + "There is a small clearing in the trees with a ring of mushrooms in the middle.");

    choices = ["candy house", "fruit vender", "field", "hang out here", "spin in a circle"];
    askQuestion(choices);

}

function field() {
    story("You come across an open field in the middle of which there is a ring of mushrooms." +
        newLine + "You feel like you are being watched." +
        newLine + "What do you do?");

    choices = ["eat a mushroom", "look around", "hide in a bush", "go to the forest"];
    askQuestion(choices);

}

function eatAMushroom() {
    messages = ["You really shouldn't eat mushrooms you can't identify.",
        "You feel a sharp pain in your intestines and your insides begin churning and burning.",
        "I would like to say you pass away peacefully, but there is no way to feel peaceful with that much vomiting.",
        "Now the pixie will need to hope for a good rain to get this place clean.",
        "Ugg, the smell is something I won't soon forget."
    ];
    delayText(messages, 1000);

}

function lookAround() {
    story("You examine the clearing closely and think you saw something move." +
        newLine + "It was smaller than a squirrel and was clearly flying." +
        newLine + "You think it might be a pixie, but if it is, how do you lure him out?");
    field();
}

function hideInBush() {
    story("You find a place to hide inside a bush and look for whatever it was that you saw." +
        newLine + "From behind you, you hear," +
        newLine + "What are you doing?" +
        newLine + "What do you do?");
    choices = ["talk to it", "turn around", "stay quiet"];
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
    messages = ["So, you're too good to talk to me, huh?",
        "Big, old person too proud to talk to a little pixie.",
        " You hear the pixie stamp a foot in the air and fly away in disgust."
    ];
    delayText(messages, 3000, field);

}

function offerItAnApple() {
    story("An apple? I can get apples anywhere.");
    field();
}

function offerItAPoisonedApple() {
    messages = ["An apple? I can get apples anywhere.",
        "He eyes the apple closely.",
        "Wait. I sense something special about that one.",
        "He takes the apple and starts to eat.",
        "This is good. Thanks.",
        "Because you gave me this great apple, I will help you out.",
        "I know of a secret way out of the forest and can lead you.......",
        "At that the pixie dies",
        "Without his help, you will be stuck in this forest forever.",
        "Sure hope you like apples."
    ]

    delayText(messages, 1000);
}

function offerItTheApplePie() {
    messages = ["The pixie looks at the apple pie and licks his lips.",
        "That looks delicious.",
        "The pixie attacks the pie flying right into the center.",
        "You are scared to put your hand anywhere near the tornado of pixie, apple and crust flying every which way.",
        "After a few minutes, the pixie comes to a rest in the middle of the pie with a look of pure satisfaction on his face.",
        "That was great, thanks.",
        "That is almost as good as candy.",
        "Let me show you the way out as a gesture of my thanks.",
        "With that, the pixie leads you out to safety and the familiar sites of your home town."
    ]
    delayText(messages, 1000);
}

function turnAround() {
    story("You turn around just in time to see the pixie fly away." +
        newLine + "Your sudden movement scared him off.");
    field();
}

function offerItTheCandy() {
    story("You offer him a piece of candy, and he gets visibly excited." +
        newLine + "Candy is my favorite!" +
        newLine + "He grabs the whole bag of your candy and flies off faster than you can even react." +
        newLine + "You just start realizing that you have been mugged by a fariy, when you feel him land on your shoulder." +
        newLine + "The gift of the candy was almost too great a gift to accept." +
        newLine + "Fortunately, I have something to offer you in return." +
        newLine + "I offer you this choice. You can come back with me to faerie, and you will live forever in a party that never stops." +
        newLine + "Or, if you prefer, I can lead you home.");
    choices = ["home", "faerie"];
    askQuestion(choices);
}

    function takenHome() {
        story("The pixie leads you through the forest until you start to see things you recognize." +
            newLine + "You turn around to thank the pixie, only to see no pixie or forest. It's just the park that has always stood there.");
    }

    function talkToIt() {
        story("You come to my forest, bothering me, while I am having my afternoon sun? I suppose you want assistance of some sort. Silly humans always needing help. Well, my assistance is a valuable commodity. You have given me nothing in return for my favors.");
        choices = ["go to forest"];
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

    function takenFaerie() {
        story("You enter a resplentent wood that glows with life and joy. You see lots of fairies whizzing about and little curious eyes popping out of each nook and crany. You hear etherial music softly echoing through the forest. As you follow the path toward the hypnotic notes, you see ahead a great banquet table covered with every imaginable treat. The table is surrounded by mystical and magical creatures of every description. A woman beyond beauty, with a crown upon her head, sits at the head of the table. Welcome home our bretheren! Welcome home.");

    }

    function fruitVender() {
        story("You come to an old man selling fruit." +
            newLine + "He looks you up and down and starts talking to you." +
            newLine + "Hey there little one, would you like some apples?" +
            newLine + "I have many kinds of apples." +
            newLine + "I have big apples, small apples, apple pie and poisoned apples." +
            newLine + "What can I get for you?");

        choices = ["small apple", "large apple", "apple pie", "poisoned apple", "buy nothing and go back"];
        askQuestion(choices);

    }

    function getApples() {
        story("You get a nice shiny apple. It might make a good lunch later.");
        fruitVender();
    }

    function getApplePie() {
        story("You get nice apple pie. It smells amazing; you can't wait to eat it but should probably wait until later.");
        applePie = true;
        fruitVender();
    }

    function getPoisonedApple() {
        story("You get a poisoned apple. It may come in handy.");
        poisonedApple = true;
        fruitVender();
    }

    function candyHouse() {
        story("You see a house completely made of candy.  There are candy cane window frames, and the smell of the gingerbread wall is overwhelming." +
            newLine + "You see a nice, old lady inside preparing dinner." +
            newLine + "There is a large pile of candy on the table." +
            newLine + "What do you want to do?");
        choices = ["talk to her", "steal the candy", "run away","go to the forest"];
        askQuestion(choices);


    }

    function talkToHer() {
        story("Well, hello little one. You look good enough to eat." +
            newLine + "Why don't you sit down and have some tea?");
        choices = ["tea", "run away"];
        if (poisonedApple) {
            choices.push("offer her the apple");
        }
        askQuestion(choices);

    }

    function tea() {
        story("You have a nice cup of tea while the old lady starts the oven." +
            newLine + "After a few minutes, you start feeling drowsy." +
            newLine + "You fall into a sleep that you will never wake from. Don't worry. The old lady will eat well tonight.");
    }

    function runAway() {
        story("You try and run, but she is fast for an old lady." +
            newLine + "She grabs you and starts forcing you towards the oven." +
            newLine + "She is strong. Too strong to fight off." +
            newLine + "I would explain what she does next, but I am trying to keep this PG13." +
            newLine + "Needless to say, the witch will eat well tonight.");
    }

    function stealTheCandy() {
        story("You slowly creep into the room." +
            newLine + "All is going well until your foot comes down on a loose board and a small creaking sound comes forth." +
            newLine + "What do you do?");

        choices = ["hide", "grab candy and run"]
        askQuestion(choices);

    }

    function hide() {
        story("You hide behind a chair just before she turns around." +
            newLine + "She eyes the room.  You know there is no way to get to the candy without her seeing you." + newLine + "");
        candyHouse();
    }

    function grabCandyandrun() {
        story("You grab the candy, but she is fast for an old lady!" +
            newLine + "She grabs your arm and starts pulling you towards the oven.");
        if (poisonedApple) {
            story("What do you do?");
            choices = ["offer her the apple", "fight free"];
            askQuestion(choices);
        } else {
            fightTheWitch();
        }
    }

    function fightTheWitch() {
        story("She is strong - too strong to fight off." +
            newLine + " I would explain what she does next, but I am trying to keep this PG13." +
            newLine + "Needless to say, the witch will eat well tonight.");
    }

    function witchEatApple() {
        messages = ["You offer her the poisoned apple, and she laughs.",
            "I will eat your apple as an appetizer while the oven warms up. You are going to be tasty.",
            "She takes a big bite out of the poisoned apple and smiles.",
            "It only takes a few moments before she falls down grasping at her throat coughing and sputtering - then nothing.",
            "You grab the candy and walk out over her corpse." + newLine + ""
        ];

        delayText(messages, 1000, forest);
        candy = true;

    }

    function homeEarly() {
        var messages = ['You ignore it and walk home.',
            'Nothing exciting happens to you on the way.',
            "That was a very boring story, but you must be a boring person for having chosen to go home.",
            "If it were me, there is no way I would pass up the chance to check out a new forest that just appears over night.",
            "To each his own, I guess."
        ];
        delayText(messages, 2000);

    }


    if (web == undefined) {
        module.exports.checkAnswers = checkAnswers;
    }