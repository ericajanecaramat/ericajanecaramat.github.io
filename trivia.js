var score = 0
var i = 1
var ans = 1
var audio1 = new Audio('audioCorrect.mp3');
var audio2 = new Audio('audioWrong.mp3');
function correct(){
document.getElementById("A1").style.visibility="visible";
}
function wrong(){
document.getElementById("A2").style.visibility="visible";
}
function hideCorrect(){
document.getElementById("A1").style.visibility="hidden";
}
function hideWrong(){
document.getElementById("A2").style.visibility="hidden";
}
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="Awesome, Correct answer"
        audio1.play();
        correct();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="D"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Awesome, Correct answer"
        correct();
        audio1.play();
        score++
    }
    else if(yy==="B"){
        wrong();
        audio2.play();
    }
    else if(yy==="C"){
        wrong();
        audio2.play();
    }
    else if(yy==="A"){
        wrong();
        audio2.play();
    }
    else if(yy===""){
        wrong();
        audio2.play();
    }
    else {
        document.getElementById("question").value="Sorry, Wrong answer"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="1. What does the acronym USB stand for when referring to a computer port? \n\na) Universal Serial Box \nb) Universal Serial Bus \nc) Universal Security Bus \nd) Universal Sound Bar";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="2. What do you call the small image icons used to express emotions or ideas in digital communication? \n\na) Emoji \nb) Emoticons \nc) Display \nd) Emotions";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="3. When referring to a computer monitor, what does the acronym LCD stand for? \n\na) Light Camera Display \nb) Led Crystal Display \nc) Liquid Crystal Display \nd) Led Camera Display";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="4. When talking about computer memory, what does the acronym ROM stand for? \n\na) Read-Only-Memory \nb) Ready-On-Memory \nc) Rewrite-Only-Memory \nd) Read-On-memory";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="5. Nintendo is a consumer electronics and video game company founded in what country? \n\na)  Korea\nb)  North America \nc) China \nd) Japan";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="6. In a photo editing program, what do the letters RGB stand for? \n\na)  Rainbow,Green and Black\nb)  Red, Green and Blue \nc) Red, Green and Black\nd) Rainbow, Green and Blue";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="7. HTML and CSS are computer languages used to create what? \n\na)  Games\nb)  Computer \nc) Websites\nd) Folder";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="8. What does the acronym (lol) stand for when used in phone texts and on the internet? \n\na)  Lack Of Loud\nb)  Laugh Of Lord \nc) Lack Out Loud\nd) Laugh Out Loud";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="9. In a website browser address bar what does (www) stand for? \n\na)  World Wide Web\nb)  World Web Wide \nc) Web Wide World\nd) World Wide Window";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="10. What year was Facebook founded? \n\na)  1998\nb)  2002 \nc) 1999\nd) 2004";
    document.view.qans.value=""
    hideCorrect();
    hideWrong();
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
    if (score>=8){ document.getElementById("A3").style.visibility="visible";
    }
    else { document.getElementById("A4").style.visibility="visible";
    }
    }
	i++; 
}

