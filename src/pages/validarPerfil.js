document.getElementById('perfil-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var nombres = document.getElementById('nombres').value;
  var apellidos = document.getElementById('apellidos').value;
  var fechaNacimiento = document.getElementById('fecha-nacimiento').value;
  var rut = document.getElementById('rut').value;
  var email = document.getElementById('email').value;

  var esValido = true;

  if (nombres === '') {
    alert('Por favor, ingrese su nombre.');
    esValido = false;
  }

  if (apellidos === '') {
    alert('Por favor, ingrese su apellido.');
    esValido = false;
  }

  if (fechaNacimiento === '') {
    alert('Por favor, ingrese su fecha de nacimiento.');
    esValido = false;
  }

  if (rut === '') {
    alert('Por favor, ingrese su RUT.');
    esValido = false;
  }

  if (email === '') {
    alert('Por favor, ingrese su correo electrónico.');
    esValido = false;
  }

  if (esValido) {
    alert('Perfil guardado exitosamente!');
  }
});
