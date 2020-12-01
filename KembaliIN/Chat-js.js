function send(){
	var table = document.getElementById("myTable");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell2.innerHTML = document.getElementById("temptulis").value;
	cell1.innerHTML = "";
	
	document.getElementById('temptulis').value = '';
}