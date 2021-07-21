    const form = document.getElementById('form').value;
    const nombre = document.getElementById('nombre').value;
    const ciudad = document.getElementById('ciudad').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const check = document.getElementById('check').value;
    expresiones = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email);
    
    function validarCuenta(){
    
    console.log(nombre);
  
    if(nombre == ""){
      document.getElementById('nombre').classList.add = 'is-invalid';
    }/* else{
      document.getElementById('nombre').innerHTML = 
    } */

}




/* form.addEventListener('submit', e =>{
  e.preventDefault();
}); */
/* const nombreValue = nombre.value;
const ciudadeValue = ciudad.value;
const passwordValue = password.value;
const password2Value = password2.value;
const checkValue = check.value;

 */
   /*  function checkValidity() {
        const controlar = document.getElementById("controlar");
        if (!controlar.checkValidity()) {
          document.getElementById("noValido").innerHTML =  'Este campo es obligatorio.';
        } 
        
        
        else {
          document.getElementById("valido").innerHTML = "Debes aceptar para poder continuar.";
        } 
    } 
 */


     /*  function comprobarEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)
        } */



        
       

        

       








/* // Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call (forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})(); */
