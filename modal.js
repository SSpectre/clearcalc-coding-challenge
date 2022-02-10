var modal = document.getElementById("modalDiv");
var modalMessage = document.getElementById("modalMessage");

var yesButton = document.getElementById("yesButton");
var cancelButton = document.getElementById("cancelButton");

function openModal(message) {
    modal.style.display = "block";
    modalMessage.innerHTML = message;
}

yesButton.onclick = function() {
    modal.style.display = "none";
    resultText.innerHTML = "You just clicked \"Yes\""
}

cancelButton.onclick = function() {
    modal.style.display = "none";
    resultText.innerHTML = "You just clicked \"Cancel\""
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}