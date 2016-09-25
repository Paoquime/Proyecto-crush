window.addEventListener("load", function (){
	var posEyes = document.getElementById("ojosL");
	var eyes = document.getElementById("negros");

	eyes.addEventListener("dragstart", function(e){
		e.dataTransfer.setData("text",e.target.id);
	});
	posEyes.addEventListener("dragover", function(e){
		e.preventDefault();
	});
	posEyes.addEventListener("drop", function(e){
		e.preventDefault();
		var data = e.dataTransfer.getData("text");
    	e.target.appendChild(document.getElementById(data));
	});
});