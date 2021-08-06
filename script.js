var character = document.getElementByID("character");
var block = document.getElementByID("block");
function jump(){
	character.classList.add("animate");
	setTimeout(function(){
		character.classList.remove("animate");
	},500);
}