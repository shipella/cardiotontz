function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone ;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "notificationsystemtz@gmail.com",
    Password : "B9B428CEE160D36D07F47441CC1CA622A8BE",
    To : 'bshipella@gmail.com',
    From : "notificationsystemtz@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}