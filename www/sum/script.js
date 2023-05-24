function sum() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/cloud_api/sum", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					var response = JSON.parse(xhr.responseText);
					document.getElementById("result").innerHTML = response.result;
			}
	};
	var data = "num1=" + encodeURIComponent(num1) + "&num2=" + encodeURIComponent(num2);
	xhr.send(data);
}