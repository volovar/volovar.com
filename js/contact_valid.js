function validateEmail() {
		var x = document.forms["main-form"]["email"].value
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		
		if (atpos<1 || dotpos < atpos +2 || dotpos +2 >= x.length) {
			document.getElementById('emailError').innerHTML = "&#42; Please enter a valid email";
  			return false;
  		}
		
		else {
			document.getElementById('emailError').innerHTML = "";
			return true;
		}
	}

function reset() {
		document.getElementById('nameError').innerHTML = "&#42;Required";
	}