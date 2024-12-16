
(function(){
    emailjs.init({
      publicKey: "KqCRxQ5K7chcobKJc",
    });
 })();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  

  

  emailjs.sendForm('service_pa92vl7', 'template_tykhl97', '#contact-form').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
});

