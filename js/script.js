//document.getElementById("button_calc").addEventListener("click", calculateInsurance());



function calculateInsurance() {

	
	let userName = document.getElementById("userName").value;
	let age = parseInt(document.getElementById("age").value);
	let country = document.getElementById("country").value;
	let horsePower = parseInt(document.getElementById("horsePower").value);

	
	result = 0;


	
	
	if (country == "Austria") {
		result = horsePower*100/age + 50;
		//return result1;
	} else if (country == "Germany") {
		result = horsePower*120/age + 100;
		//return result1;
	} else if (country == "Italy") {
		result = horsePower*150/(age+2) + 150;
		//return result1;
	}
	

	document.getElementById("result_calc").innerHTML = userName + ", your insurance costs " + result + "€";

	console.log(result1);
}

/*
function teamMembers () {

 for (var i = 0; i < teamMembers.length; i++) {
        var obj = teamMembers[i];
        document.getElementById("name1").innerHTML = teamMembers[0].name + "<br>";
    }

 }
*/
