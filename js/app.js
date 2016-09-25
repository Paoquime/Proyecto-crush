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

window.onload = function() {
	document.onmousemove = function(e) {
		var x = -(e.clientX/125);
		var y = -(e.clientY/125);
	this.body.style.backgroundPosition = x + 'px ' + y + 'px';
  };
};