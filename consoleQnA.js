var questions = [
    "Whats your name?",
    "Where do you live?",
    "What's your favourite lingo?",
    "What you code? it must be javascript right! that's why you are here!"
];

var answer = [];

function startAsking (i){
    process.stdout.write(`\n ${questions[i]} > `)
}

process.stdin.on('data', function(data){
    answer.push(data.toString().trim());
    if(answer.length<questions.length){
        startAsking(answer.length);
    }
    else{
         process.exit();
    }    
})
process.on('exit', function(){
    for(var x=0; x<answer.length; x++){
        process.stdout.write(`${answer[x]} \n`);
    }

});

startAsking(0);