var base_url = 'http://localhost:5000/api/commands/';

function listCommand() {

    var tblCommands = document.querySelector('#tbl-commands tbody');

    axios.get(base_url)
    .then(response => {

        var listCommand = response.data;

        for(command of listCommand) {
            var commandLine = createCommandItem(command);
            tblCommands.appendChild(commandLine);
        }

        var btnEdit = document.querySelectorAll(".btn-edit");
        var btnDelete = document.querySelectorAll('.btn-remove');
       
        btnEdit.forEach(function(btn) {
            btn.onclick = function() {
                getCommand(btn.getAttribute('commandId'));
                modal.style.display = "block";
            }
        });

        btnDelete.forEach(function(btn) {
            btn.onclick = function() {
                deleteCommand(btn.getAttribute('commandId'));
            }
        });
    })
    .catch(reject => {
        console.log(reject);
    })
}

function getCommand(id) {
    axios.get(base_url + id, {})
    .then(resolve => {
        var command = resolve.data;

        var inputCommand = document.querySelector("#commandId");
        var platform = document.querySelector("#txtPlatform");
        var howTo = document.querySelector("#txtHowTo");
        var commandLine = document.querySelector("#txtCommandLine");

        inputCommand.value = command.id;
        platform.value = command.platform;
        howTo.value = command.howTo;
        commandLine.value = command.commandLine;
    })
    .catch(reject => {
        console.log(reject);
    })
}

function putCommand(command) {
    axios.put(base_url + command.id, {
        id: command.id,
        platform: command.platform,
        howTo: command.howTo,
        commandLine: command.commandLine
    })
    .then(resolve => {
        alert('This command was changed.');
        location.reload();
    })
    .catch(reject => {
        console.log(reject);
    })
}

function postCommand(command) {
    axios.post(base_url, {
        platform: command.platform,
        howTo: command.howTo,
        commandLine: command.commandLine
    })
    .then(resolve => {
        alert('This command was added.');
        location.reload();
    })
    .catch(reject => {
        console.log(reject);
    })
}

function deleteCommand(id) {
    axios.delete(base_url + id)
    .then(resolve => {
        alert('This command was deleted.');
        location.reload();
    })
    .catch(reject => {
        console.log(reject);
    })
}