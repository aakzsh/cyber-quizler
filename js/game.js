

var count = 1;

var LS =  JSON.parse(localStorage.getItem('questions'));


function one() {
   if(LS[count-1]['ans'] == 1 || LS[count-1]['ques'] == '1'){
       console.log(count)
       count++;

       loopQues()

      
        
     
    //    window.location.href = 'game.html';
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
        loopQues()
        // window.location.href = 'game.html';
    }
    else{
        window.location.href = 'wrong.html';
    }
   } 

//    $("#button").click(function() {
//     $('.transform').toggleClass('transform-active');
//   });

function loopQues(){
if (count>LS.length){
    window.location.href='won.html';
}




document.getElementById('level').innerHTML = 'LEVEL: ' + count;
    document.getElementById('quest').innerHTML = LS[count-1]['ques'];
    document.getElementById('one').innerHTML = LS[count-1]['a'];
    document.getElementById('two').innerHTML = LS[count-1]['b'];
}


////////////////
