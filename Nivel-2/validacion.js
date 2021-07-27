<<<<<<< HEAD

expresionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
expresionPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;


// ==== Valiar Registro ====
document.getElementById("form").onclick = function() {validarCuenta()};

function validarCuenta(){
  if(nombre.value == ""){
  document.getElementById("nombre").classList.add('is-invalid');
  document.getElementById("nombre").classList.remove('is-valid');
  }else{
    document.getElementById("nombre").classList.remove('is-invalid');
    document.getElementById('nombre').classList.add ('is-valid');
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

  if(ciudad.value == ""){
    document.getElementById("ciudad").classList.add('is-invalid');
    document.getElementById("ciudad").classList.remove('is-valid');
  }else{
    document.getElementById("ciudad").classList.remove('is-invalid');
    document.getElementById('ciudad').classList.add ('is-valid');
  }

  if(password.value == ""){
    document.getElementById("password").classList.add('is-invalid');
    document.getElementById("password").classList.remove('is-valid');
  }else if (!expresionPass.test(password.value)){
    document.getElementById("password").classList.add('is-invalid');
    document.getElementById("password").classList.remove('is-valid');
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
  }
  else{
    document.getElementById("password2").classList.remove('is-invalid');
    document.getElementById('password2').classList.add ('is-valid');
  }

  if (password.value !== password2.value) {
    document.getElementById("password2").classList.add('is-invalid');
    document.getElementById("password2").classList.remove('is-valid');
  }else{
    document.getElementById("password2").classList.remove('is-invalid');
    document.getElementById("password2").classList.add('is-valid');
  }
  
  if(password.value == ""){
    document.getElementById("check").classList.add('is-invalid');
    document.getElementById("check").classList.remove('is-valid');
  }else{
    document.getElementById("check").classList.remove('is-invalid');
    document.getElementById('check').classList.add ('is-valid');
  }

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
}else{
  document.getElementById("passwordSesion").classList.remove('is-invalid');
  document.getElementById("passwordSesion").classList.add('is-valid');
}
}

=======

expresionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
expresionPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;


// ==== Valiar Registro ====
document.getElementById("form").onclick = function() {validarCuenta()};

function validarCuenta(){
  if(nombre.value == ""){
  document.getElementById("nombre").classList.add('is-invalid');
  document.getElementById("nombre").classList.remove('is-valid');
  }else{
    document.getElementById("nombre").classList.remove('is-invalid');
    document.getElementById('nombre').classList.add ('is-valid');
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

  if(ciudad.value == ""){
    document.getElementById("ciudad").classList.add('is-invalid');
    document.getElementById("ciudad").classList.remove('is-valid');
  }else{
    document.getElementById("ciudad").classList.remove('is-invalid');
    document.getElementById('ciudad').classList.add ('is-valid');
  }

  if(password.value == ""){
    document.getElementById("password").classList.add('is-invalid');
    document.getElementById("password").classList.remove('is-valid');
  }else if (!expresionPass.test(password.value)){
    document.getElementById("password").classList.add('is-invalid');
    document.getElementById("password").classList.remove('is-valid');
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
  }
  else{
    document.getElementById("password2").classList.remove('is-invalid');
    document.getElementById('password2').classList.add ('is-valid');
  }

  if (password.value !== password2.value) {
    document.getElementById("password2").classList.add('is-invalid');
    document.getElementById("password2").classList.remove('is-valid');
  }else{
    document.getElementById("password2").classList.remove('is-invalid');
    document.getElementById("password2").classList.add('is-valid');
  }
  
  if(password.value == ""){
    document.getElementById("check").classList.add('is-invalid');
    document.getElementById("check").classList.remove('is-valid');
  }else{
    document.getElementById("check").classList.remove('is-invalid');
    document.getElementById('check').classList.add ('is-valid');
  }

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
}else{
  document.getElementById("passwordSesion").classList.remove('is-invalid');
  document.getElementById("passwordSesion").classList.add('is-valid');
}
}

>>>>>>> b352c5c86f95fd26b4a19c144fa372a5c96316c1
