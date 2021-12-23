function send(){
	var table = document.getElementById("myTable");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell2.innerHTML = document.getElementById("temptulis").value;
	cell1.innerHTML = "";
	
	document.getElementById('temptulis').value = '';
}
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