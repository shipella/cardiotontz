function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("phone").value,
	};
  
	const serviceID = "service_b1e5dtq";
	const templateID = "template_q2fvjqu";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("phone").value = "";
		  console.log(res);
		  Swal.fire({
			title: "Ombi lako lemetumwa!",
			text: "Asante kwa Agizo lako tutawasiliana nawe hivi punde!",
			icon: "success"
  
	  })
	  .catch(err=>console.log(err));
  
  }
  