function keluar(){
	if(document.getElementById("BT").classList.contains("a")){
		document.getElementById("BT").classList.remove("a");
		document.getElementById("BT").style.animationName="geser1b";
		document.getElementById("BT").style.animationDuration="1s";
		document.getElementById("BT").style.animationFillMode="forwards";
		
		document.getElementById("BH").style.animationName="geser2b";
		document.getElementById("BH").style.animationDuration="1s";
		document.getElementById("BH").style.animationFillMode="forwards";
		
		document.getElementById("7km").style.animationName="geser3b";
		document.getElementById("7km").style.animationDuration="1s";
		document.getElementById("7km").style.animationFillMode="forwards";
		
		document.getElementById("37km").style.animationName="geser4b";
		document.getElementById("37km").style.animationDuration="1s";
		document.getElementById("37km").style.animationFillMode="forwards";
		
		document.getElementById("3km").style.animationName="geser5b";
		document.getElementById("3km").style.animationDuration="1s";
		document.getElementById("3km").style.animationFillMode="forwards";
		
		document.getElementById("filter").innerText="Filter";
	}
	else{
		document.getElementById("BT").classList.add("a");
		document.getElementById("BT").style.animationName="geser1";
		document.getElementById("BT").style.animationDuration="1s";
		document.getElementById("BT").style.animationFillMode="forwards";
		
		document.getElementById("BH").style.animationName="geser2";
		document.getElementById("BH").style.animationDuration="1s";
		document.getElementById("BH").style.animationFillMode="forwards";
		
		document.getElementById("7km").style.animationName="geser3";
		document.getElementById("7km").style.animationDuration="1s";
		document.getElementById("7km").style.animationFillMode="forwards";
		
		document.getElementById("37km").style.animationName="geser4";
		document.getElementById("37km").style.animationDuration="1s";
		document.getElementById("37km").style.animationFillMode="forwards";
		
		document.getElementById("3km").style.animationName="geser5";
		document.getElementById("3km").style.animationDuration="1s";
		document.getElementById("3km").style.animationFillMode="forwards";
		
		document.getElementById("filter").innerText="Selesai";
	}
}