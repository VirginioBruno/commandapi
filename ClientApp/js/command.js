function createCommandItem(command) {
    
    var trElement = document.createElement('tr');
    var tdPlatform = document.createElement('td');
    var tdHowTo = document.createElement('td');
    var tdCommand = document.createElement('td');
    var tdAction = document.createElement('td');

    var btnRemove = document.createElement('i');
    var btnEdit = document.createElement('i');
    var iconRemove = document.createElement('i');
    var iconEdit = document.createElement('i');

    btnRemove.setAttribute('commandId', command.id);
    btnRemove.className = 'btn-remove';
    btnEdit.setAttribute('commandId', command.id);
    btnEdit.className = 'btn-edit';
    
    iconRemove.className = 'fas fa-trash';
    btnRemove.appendChild(iconRemove);

    iconEdit.className = 'fas fa-edit';
    btnEdit.appendChild(iconEdit);

    tdAction.appendChild(btnEdit);
    tdAction.appendChild(btnRemove);

    tdPlatform.textContent = command.platform;
    tdHowTo.textContent = command.howTo;
    tdCommand.textContent = command.commandLine;
    
    trElement.appendChild(tdPlatform);
    trElement.appendChild(tdHowTo);
    trElement.appendChild(tdCommand);
    trElement.appendChild(tdAction);

    return trElement;

}

function saveCommand() {
    
}