window.addEventListener("load", function (){
	var cejas = document.getElementById("cajaCejas");
	var ojos = document.getElementById("cajaOjos");
	var labios = document.getElementById("cajaLabios");
	var nariz = document.getElementById("cajaNariz");
	var posCej = document.getElementById("posCejas");
	var posOj = document.getElementById("posOjos");
	var posLab = document.getElementById("posLabios");
	var posNar = document.getElementById("posNariz");

	cejas.addEventListener("dragstart", function(e){
		e.dataTransfer.setData("text", e.target.id);
	});
	posCej.addEventListener("dragover", function(e){
		e.preventDefault();
	});
	posCej.addEventListener("drop", function(e){
		e.preventDefault();
		var data = e.dataTransfer.getData("text");
		e.target.appendChild(document.getElementById(data));
	});

	ojos.addEventListener("dragstart", function(e){
		e.dataTransfer.setData("text",e.target.id);
	});
	posOj.addEventListener("dragover", function(e){
		e.preventDefault();
	});
	posOj.addEventListener("drop", function(e){
		e.preventDefault();
		var data = e.dataTransfer.getData("text");
    	e.target.appendChild(document.getElementById(data));
	});

	labios.addEventListener("dragstart", function(e){
		e.dataTransfer.setData("text",e.target.id);
	});
	posLab.addEventListener("dragover", function(e){
		e.preventDefault();
	});
	posLab.addEventListener("drop", function(e){
		e.preventDefault();
		var data = e.dataTransfer.getData("text");
    	e.target.appendChild(document.getElementById(data));
	});

	nariz.addEventListener("dragstart", function(e){
		e.dataTransfer.setData("text",e.target.id);
	});
	posNar.addEventListener("dragover", function(e){
		e.preventDefault();
	});
	posNar.addEventListener("drop", function(e){
		e.preventDefault();
		var data = e.dataTransfer.getData("text");
    	e.target.appendChild(document.getElementById(data));
	});

	var btn = document.getElementById("boton");
	btn.addEventListener("click", function(e){
		var msj = document.getElementById("mensaje");
		msj.style.display = "block"
	});
});

window.onload = function() {
	document.onmousemove = function(e) {
		var x = -(e.clientX/125);
		var y = -(e.clientY/125);
	this.body.style.backgroundPosition = x + 'px ' + y + 'px';
  };
}