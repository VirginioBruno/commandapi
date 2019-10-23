var base_url = 'http://localhost:5000/api/commands/';

function getCommand(id) {

    var tblCommands = document.querySelector('#tbl-commands tbody');

    axios.get(base_url + id)
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

function putCommand() {
    axios.put('', {})
    .then(resolve => {
        
    })
    .catch(reject => {

    })
}

function postCommand() {
    axios.post('', {})
    .then(resolve => {
        
    })
    .catch(reject => {

    })
}

function deleteCommand(id) {
    axios.delete(base_url + id)
    .then(resolve => {
        alert('This command was deleted.');
        console.log(resolve)
        location.reload();
    })
    .catch(reject => {
        console.log(reject);
    })
}