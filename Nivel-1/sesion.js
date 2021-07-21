form.addEventListener("submit", validarInicio, true)
form.addEventListener("blur", validarInicio, true)

function validarInicio(){
  if(nombreSesion.value == ""){
  document.getElementById("nombreSesion").classList.add('is-invalid');
  document.getElementById("nombreSesion").classList.remove('is-valid');
}else{
  document.getElementById("nombreSesion").classList.remove('is-invalid');
  document.getElementById("nombreSesion").classList.add('is-valid');
}
}