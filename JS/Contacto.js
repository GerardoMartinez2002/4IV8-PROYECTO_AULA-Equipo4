import emailjs from 'emailjs-com';
function alerta(){
    alert("Se ha enviado correctamente. Pronto lo atenderemos")
}
const templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

emailjs.send('<service_qom1tbe>','<SmartCipherTemplate>', templateParams, '<user_rApsFSg5zhiAwg2dpRuXU>')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});

var templateParametros = {
    nombre: 'Gerardo',
    comentario: 'Buen programa'
};

emailjs.send('<service_qom1tbe>','<SmartCipherTemplate>', templateParametros)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});

    emailjs.sendForm('<service_qom1tbe>','<SmartCipherTemplate>', '#myForm')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});
