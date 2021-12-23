function menu(){
	document.getElementById("slider").style.visibility= "visible";
	document.getElementById("slider").style.animationName= "sliding";
	document.getElementById("slider").style.animationDuration= "2s";
	document.getElementById("slider").style.animationFillMode= "forwards";
}

function tutup(){
	document.getElementById("slider").style.animationName= "sliding2";
	document.getElementById("slider").style.animationDuration= "1s";
	document.getElementById("slider").style.animationFillMode= "forwards";
	//setTimeout(hilang,1000);
	console.log("as");
}
function hilang(){
	document.getElementById("slider").style.visibility= "hidden";
}