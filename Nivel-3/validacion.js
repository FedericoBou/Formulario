
expresionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
expresionPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;


// ==== Valiar Registro ====
document.getElementById("boton").onclick = function() {validarCuenta()};

function validarCuenta(){
  
  if(nombre.value == ""){
  document.getElementById("nombre").classList.add('is-invalid');
  document.getElementById("nombre").classList.remove('is-valid');
  }else{
    document.getElementById("nombre").classList.remove('is-invalid');
    document.getElementById('nombre').classList.add ('is-valid');
  }

  if(ciudad.value == ""){
    document.getElementById("ciudad").classList.add('is-invalid');
    document.getElementById("ciudad").classList.remove('is-valid');
  }else{
    document.getElementById("ciudad").classList.remove('is-invalid');
    document.getElementById('ciudad').classList.add ('is-valid');
  }

  if(email.value == ""){
    document.getElementById("email").classList.add('is-invalid');
    document.getElementById("email").classList.remove('is-valid');
  }else if(!expresionEmail.test(email.value)){
    document.getElementById("email").classList.add('is-invalid');
    document.getElementById("email").classList.remove('is-valid');
  }else{
    document.getElementById("email").classList.add('is-valid'),
    document.getElementById("email").classList.remove('is-invalid');
  }
  
//COMPROBAMOS LOS PASSWORD
  if(password.value == ""){
    document.getElementById("password").classList.add('is-invalid');
    document.getElementById("password").classList.remove('is-valid');
  }else if (!expresionPass.test(password.value)){
    document.getElementById("password").classList.add('is-invalid');
    document.getElementById("password").classList.remove('is-valid');
  }else if(password.value !== password2.value){
  document.getElementById("password").classList.remove('is-invalid');
  document.getElementById('password').classList.add ('is-valid');
  }else{
    document.getElementById("password").classList.remove('is-invalid');
    document.getElementById('password').classList.add ('is-valid');
  }
  if(password2.value == ""){
    document.getElementById("password2").classList.add('is-invalid');
    document.getElementById("password2").classList.remove('is-valid');
  }else if (!expresionPass.test(password2.value)) {
    document.getElementById("password2").classList.add('is-invalid');
    document.getElementById("password2").classList.remove('is-valid');
  }else if(password.value !== password2.value){
    document.getElementById("password2").classList.add('is-invalid');
    document.getElementById("password2").classList.remove('is-valid');
  }else{
    document.getElementById("password2").classList.remove('is-invalid');
    document.getElementById('password2').classList.add ('is-valid');
  }
      // Comprobar el check
  document.getElementById('customControlValidation1').addEventListener('change', function() {
    if (this.checked) {
   document.getElementById('customControlValidation1').classList.add("is-valid");
   document.getElementById('customControlValidation1').classList.remove("is-invalid");
    }else{
      document.getElementById('customControlValidation1').classList.add("is-invalid");
      document.getElementById('customControlValidation1').classList.remove("is-valid");
    }
  });

  if(nombre.value == "" || password.value == "" || password2.value == "" || ciudad.value == "" || email.value == ""){
    alert("Por favor verifique los datos, ya que algunos estan vacios!")
    return false;
  }else if(password.value !== password2.value){
    alert("El password no coincide")
  } else if(customControlValidation1 !== this.checked){
    document.getElementById('customControlValidation1').classList.add("is-invalid");
  }else{ 
    $('#miModalCuenta').modal();   
  }
  var registroModal = {
    Nombre: nombre.value,
    Email: email.value,
    ciudad: ciudad.value,
    reModal: function() {
    return "Nombre: " + this.Nombre + "</br>" + "Email: " + this.Email + "</br>" + "ciudad: " + this.ciudad;
    }
  }
  document.getElementById("datosModalCuenta").innerHTML = registroModal.reModal();

}

// ==== Validar Inicio de Sesion ====

document.getElementById("bs").onclick = function() {enviarInicio()};

function enviarInicio(){
  if(nombreSesion.value == ""){
  document.getElementById("nombreSesion").classList.add('is-invalid');
  document.getElementById("nombreSesion").classList.remove('is-valid');
}else{
  document.getElementById("nombreSesion").classList.remove('is-invalid');
  document.getElementById("nombreSesion").classList.add('is-valid');
}

if(passwordSesion.value == ""){
  document.getElementById("passwordSesion").classList.add('is-invalid');
  document.getElementById("passwordSesion").classList.remove('is-valid');
}else if (!expresionPass.test(passwordSesion.value)) {
  document.getElementById("passwordSesion").classList.add('is-invalid');
  document.getElementById("passwordSesion").classList.remove('is-valid');
}else{
  document.getElementById("passwordSesion").classList.remove('is-invalid');
  document.getElementById("passwordSesion").classList.add('is-valid');
}
  if(nombreSesion.value =="" || passwordSesion.value == ""){
    alert("Por favor verifique los datos, ya que algunos estan vacios!")
    return false;
}  
else{ 
    $('#miModal').modal();   
}
var datosModal = {
  Usuario: nombreSesion.value,
  inModal: function() {
  return "Usuario: " + this.Usuario;
  }
}
document.getElementById("datosModal").innerHTML = datosModal.inModal();
}