

var questions = [

{'ques':'Which of the following is a positive impact of technology', 'ans': 1, 'a': 'staying connected', 'b': 'inactive lifestyles'},
{'ques':'Has technology made the workplace more efficient?', 'ans': 2, 'a': 'no', 'b': 'yes'},
{'ques':'Should you be handing over your phone to someone unknown for a while', 'ans': 2, 'a': 'yes', 'b': 'no'},
{'ques':'Which protocol is generally consider safer', 'ans': 1, 'a': 'HTTPS', 'b': 'HTTP'},
{'ques':'Should you be downloading files from a malicious source freely', 'ans': 2, 'a': 'yes', 'b': 'no'},
{'ques':'Should you ask for permission while taking data from internet which is not explicitly free to use?', 'ans': 1, 'a': 'yes', 'b': 'no'},
{'ques':'Is connecting to any available free WiFi safe?', 'ans': 2, 'a': 'yes', 'b': 'no'},
{'ques':'Should you write down your passwords at random places so that you dont forget them', 'ans': 2, 'a': 'yes', 'b': 'no'},
{'ques':'Is multi factor authorization safer than single factor authorization', 'ans': 1, 'a': 'yes', 'b': 'no'},
{'ques':'Should you always keep a check on what applications are using what services of your device', 'ans': 2, 'a': 'no', 'b': 'yes'},
{'ques':'Is sending pictures of you or your family to random people safe?', 'ans': 1, 'a': 'no', 'b': 'yes'},
{'ques':"If you manage a server, should you make sure that your user's password is being stored in an encrypted format?", 'ans': 2, 'a': 'no', 'b': 'yes'},
{'ques':'Should we exploit the bugs that we find over some website, even if its illegal to do so?', 'ans': 1, 'a': 'no', 'b': 'yes'},
{'ques':'Is visiting sites with names similar to popular sites safe?', 'ans': 2, 'a': 'yes', 'b': 'no'},
{'ques':'Should you use the information available on internet ethically?', 'ans': 1, 'a': 'yes', 'b': 'no'},
{'ques':'Is cyberbullying identified as a criminal offense?', 'ans': 2, 'a': 'no', 'b': 'yes'},
{'ques':'Should you always check access to your microphone and camera', 'ans': 1, 'a': 'yes', 'b': 'no'},
{'ques':'Is it alright to use unknown cables for charging or data transfer', 'ans': 2, 'a': 'yes', 'b': 'no'},
{'ques':'Does a SSL certificate guarantee 100% safety of that website', 'ans': 1, 'a': 'no', 'b': 'yes'},
{'ques':'Which of the following is a very common cyber attack?', 'ans': 1, 'a': 'Malvertising', 'b': 'Booting'},

]

q = questions;

function pushQuestions(){
    
    q.sort(() => Math.random() - 0.5)
    console.log(q);
}

function pushStorage(){
    localStorage.setItem('questions', JSON.stringify(q));
    window.location.href='game.html';
}


