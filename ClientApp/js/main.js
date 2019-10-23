var modal = document.querySelector("#command-modal");
var btnAdd = document.querySelector("#btn-add");
var spans = document.querySelectorAll(".close");

// When the user clicks the button, open the modal 
btnAdd.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans.forEach(function(span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Fill table with commands
getCommand('');