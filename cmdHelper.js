// helper functions

var prompt = require('readline-sync');
var chalk = require('chalk');
var cyoa = require('./cyoa');

 function askQuestion(choices) {
    var answer = choices[prompt.keyInSelect(choices, "What do you do?", {
        cancel: false
    })];
    cyoa.checkAnswers(answer);
}

 function story(text) {
    console.log(chalk.rgb(218, 165, 32)(text))
}

 function delayText(text, delay, func) {

    var index = 0;
    var callback = function (text) {

        story(text[index]);
        index += 1;
        if (index > text.length - 1) {
            clearInterval(timer);
            if (func != undefined) {
                func();
            }
        }
    }
    var timer = setInterval(function () {
        callback(text);

    }, delay);
}

module.exports.delayText = delayText;
module.exports.askQuestion = askQuestion;
module.exports.story = story;
