		function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username : "siteprimebillinginc@gmail.com",
				Password : "Mikipass.1980",
				To : "primebillinginc@gmail.com",
				From : document.getElementById("email").value,
				Subject : document.getElementById("subject").value,
				Body : document.getElementById("name").value + " wrote: <br>"+ document.getElementById("message").value,
			})
			.then(function(message){
				alert("Mail sent successfully"),
				document.getElementById("formemail").reset();
				document.getElementById("name").focus();
			});
		}
		
		function subscribe() {
			document.getElementById("sub-notify").style.display = "none";
			valor = document.getElementById("emailsubscribe").value;
				if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
					Email.send({
						Host: "smtp.gmail.com",
						Username : "siteprimebillinginc@gmail.com",
						Password : "Mikipass.1980",
						To: "primebillinginc@gmail.com",
						From : "siteprimebillinginc@gmail.com",
						Subject : "Subscribe",
						Body : document.getElementById("emailsubscribe").value + " need subscribe to www.primebillinginc.com",
					})
					.then(function(msg){
						if (msg.trim() == 'OK') {
							document.getElementById("sub-notify").style.display = "block";
							document.getElementById("formsubscribe").reset();
							document.getElementById("emailsubscribe").focus();
						  } 
					});
				} 
				else {
					document.getElementById("emailsubscribe").focus(); 
				}
		}


