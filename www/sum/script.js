function sum() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/cloud_api/sum?num1=" + num1 + "&num2=" + num2, true);
	xhr.onload = function() {
		document.getElementById("result").innerHTML = xhr.responseText;
	};
	xhr.send();
}