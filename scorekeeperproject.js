var p1button= document.querySelector("#p1");
var p2button=document.getElementById("p2");
var p1score=0;
var p2score=0;
var first= document.querySelector("#first");
var h1= document.querySelector("h1");
var reset=document.getElementById("reset");
var numinput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span")
var winningScore=0;
var gameover=false;
p1button.addEventListener("click", function(){
	
	if(!gameover){
		p1score++;
	if(p1score===winningScore){
		first.classList.add("winner");
		gameover=true;
		
	}
	//console.log(p1score);
	first.textContent=p1score;}

});
p2button.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(p2score===winningScore){
		second.classList.add("winner");
		gameover=true;
		
	}
	//console.log(p2score);
	second.textContent=p2score;}

});
reset.addEventListener("click",function(){
		resett();

});
function resett(){
	p1score=0;
		p2score=0;
		first.textContent=0;
		second.textContent=0;
		first.classList.remove("winner");
		second.classList.remove("winner");
		gameover=false;
}
numinput.addEventListener("change", function(){
	winningScoreDisplay.textContent=numinput.value;
	winningScore=Number(numinput.value);
	resett();
	

})






