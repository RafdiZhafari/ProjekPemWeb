function signup(){
		if(document.getElementById("koren").classList.contains("square2")||document.getElementById("koren").classList.contains("square2b")){
			document.getElementById("koren").classList.add("square2a");
			document.getElementById("koren").classList.remove("square2");
			document.getElementById("koren").classList.remove("square2b");
			for(var i=8;i<=10;i++){
			document.getElementById(i).style.animationName = "hilang";
			document.getElementById(i).style.animationDuration = "0.8s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			
			document.getElementById("tlogin").style.animationName = "login";
			document.getElementById("tlogin").style.animationDuration = "2s";
			document.getElementById("tlogin").style.animationFillMode = "forwards";
			
			for(var i=1;i<=3;i++){
			document.getElementById(i).style.animationName = "kiri";
			document.getElementById(i).style.animationDuration = "2s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			for(var i=4;i<=6;i++){
			document.getElementById(i).style.animationName = "kiri2";
			document.getElementById(i).style.animationDuration = "2s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			
			
			document.getElementById("3").classList.remove("khusus");
			document.getElementById("6").classList.remove("khusus");
			document.getElementById("3").style.opacity= "0";
			document.getElementById("6").style.opacity= "0";
			
			document.getElementById("login").style.animationName= "kiri3";
			document.getElementById("login").style.animationDuration= "2s";
			document.getElementById("login").style.animationFillMode= "forwards";
			setTimeout(muncul,1000);
		}
		else{
			document.getElementById("koren").classList.add("square2b");
			document.getElementById("koren").classList.remove("square2a");
			
			for(var i=8;i<=10;i++){
			document.getElementById(i).style.animationName = "hilang";
			document.getElementById(i).style.animationDuration = "0.8s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			
			document.getElementById("tlogin").style.animationName = "loginb";
			document.getElementById("tlogin").style.animationDuration = "2s";
			document.getElementById("tlogin").style.animationFillMode = "forwards";
			
			for(var i=1;i<=3;i++){
			document.getElementById(i).style.animationName = "kirib";
			document.getElementById(i).style.animationDuration = "2s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			for(var i=4;i<=6;i++){
			document.getElementById(i).style.animationName = "kiri2b";
			document.getElementById(i).style.animationDuration = "2s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			
			
			document.getElementById("3").style.opacity= "1";
			document.getElementById("6").style.opacity= "1";
			
			document.getElementById("login").style.animationName= "kiri3b";
			document.getElementById("login").style.animationDuration= "2s";
			document.getElementById("login").style.animationFillMode= "forwards";
			setTimeout(muncul2,1000);
		}
	}
		
function muncul(){
	for(var i=8;i<=10;i++){
			document.getElementById(i).style.animationName = "hilang2";
			document.getElementById(i).style.animationDuration = "1.5s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
			
	document.getElementById("2").placeholder= "Email";
	document.getElementById("3").style.opacity= "1";
	document.getElementById("6").style.opacity= "1";
	document.getElementById("8").innerText = 'Welcome Back,';
	document.getElementById("login").innerText = "Sign Up"
	document.getElementById("10").innerText = "Sign In"
	document.getElementById("9").innerText = "klo dah punya akun pencet bawah"
	
}

function muncul2(){
	for(var i=8;i<=10;i++){
			document.getElementById(i).style.animationName = "hilang2";
			document.getElementById(i).style.animationDuration = "0.8s";
			document.getElementById(i).style.animationFillMode = "forwards";
			}
	
	document.getElementById("3").classList.add("khusus");
	document.getElementById("6").classList.add("khusus");
	document.getElementById("2").placeholder= "Password";
	document.getElementById("3").style.opacity= "0";
	document.getElementById("6").style.opacity= "0";
	document.getElementById("8").innerText = 'Hello, Friend';
	document.getElementById("login").innerText = "Log In"
	document.getElementById("10").innerText = "Daftar"
	document.getElementById("9").innerText = "klo blom punya akun daftar sini"
	
}