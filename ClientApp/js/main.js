var modal = document.querySelector("#command-modal");

var btnAdd = document.querySelector("#btn-add");
var btnSave = document.querySelector(".btn-save");

var spans = document.querySelectorAll(".close");

// When the user clicks the button, open the modal 
btnAdd.onclick = function() {
    var platform = document.querySelector("#txtPlatform");
    var howTo = document.querySelector("#txtHowTo");
    var commandLine = document.querySelector("#txtCommandLine");
    var inputCommand = document.querySelector("#commandId");

    inputCommand.value = '';
    platform.value = '';
    howTo.value = '';
    commandLine.value = '';

    modal.style.display = "block";
}

btnSave.onclick = function() {
    var platform = document.querySelector("#txtPlatform");
    var howTo = document.querySelector("#txtHowTo");
    var commandLine = document.querySelector("#txtCommandLine");
    var inputCommand = document.querySelector("#commandId");

    

    if (inputCommand.value != '') {
        var command = {
            id: inputCommand.value,
            platform: platform.value,
            howTo: howTo.value,
            commandLine: commandLine.value
        }

        putCommand(command);
    }
        
    else {
        var command = {
            platform: platform.value,
            howTo: howTo.value,
            commandLine: commandLine.value
        }

        postCommand(command);
    }
        
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
listCommand();