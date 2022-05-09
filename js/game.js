

var count = 1;

var LS =  JSON.parse(localStorage.getItem('questions'));


function one() {
   if(LS[count-1]['ans'] == 1 || LS[count-1]['ques'] == '1'){
       console.log(count)
       count++;
       window.location.href = 'game.html';
   }
   else{
       window.location.href = 'wrong.html';
   }
  }


   function two() {
    if(LS[count-1]['ans'] == 2 || LS[count-1]['ques'] == '2'){
        // console.log("sahi sahi")
        console.log(count)
        count++;
        window.location.href = 'game.html';
    }
    else{
        window.location.href = 'wrong.html';
    }
   } 

function loopQues(){
if (count>LS.length){
    window.location.href='won.html';
}
document.getElementById('level').innerHTML = 'LEVEL: ' + count;
    document.getElementById('quest').innerHTML = LS[count-1]['ques'];
}