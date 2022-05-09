

var questions = [{'ques':'whos hehe', 'ans': 1, 'a': 'first', 'b': 'second'},{'ques':'whos not hehe', 'ans': 2, 'a': 'pehla', 'b': 'dusra'} ]

q = questions;

function pushQuestions(){
    
    q.sort(() => Math.random() - 0.5)
    console.log(q);
}

function pushStorage(){
    localStorage.setItem('questions', JSON.stringify(q));
    window.location.href='game.html';
}


