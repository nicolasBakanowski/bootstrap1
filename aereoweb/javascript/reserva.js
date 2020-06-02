
var modala = document.getElementById("modalreserva");

// Get the button that opens the modal
var btna = document.getElementById("reservabtn");

// Get the <span> element that closes the modal
var spana = document.getElementsByClassName("cerrar")[0];

// When the user clicks on the button, open the modal
btna.onclick = function() {
  modala.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spana.onclick = function() {
  modala.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modala.style.display = "none";
  }
}