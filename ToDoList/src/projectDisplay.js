import deleteProject from "./projectEnder";

const displayProject = (project) => {
    const display = document.querySelector('.projectDisplay');
    const existantContentDisplay = document.querySelector('.contentDisplay');

    if(existantContentDisplay){
        display.innerHTML = "";
    }

    const contentDisplay = document.createElement('div');
    contentDisplay.classList.add('contentDisplay');

    const title = document.createElement('div');
    title.classList.add('displayTitle');
    title.innerHTML = project.Title;
    
    const description = document.createElement('div');
    description.classList.add('displayDescription');
    description.innerHTML = 'Description: ' + project.Description;
    
    const dueDate = document.createElement('div');
    dueDate.classList.add('displayDueDate');
    dueDate.innerHTML = 'Due Date: ' + project.DueDate;
    
    const priority = document.createElement('div');
    priority.classList.add('displayPriority');
    priority.innerHTML = 'Priority: ' + project.Priority;
    
    const checklist = document.createElement('div');
    checklist.classList.add('displayCheckList');
    checklist.innerHTML = 'Checklist: ';
    
    let checks = project.Checklist.split(',');

    for(let i = 0; i < checks.length; i++){
        let pair = document.createElement('div');
        pair.classList.add('pairCheck');
        
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.setAttribute('id',`check${i}`);

        let label = document.createElement('label');
        label.htmlFor = `check${i}`;
        label.innerHTML = checks[i];

        pair.appendChild(label);
        pair.appendChild(check);

        checklist.appendChild(pair);
    }

    contentDisplay.appendChild(title);
    contentDisplay.appendChild(description);
    contentDisplay.appendChild(dueDate);
    contentDisplay.appendChild(priority);
    contentDisplay.appendChild(checklist);

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('deleteBtn');
    deleteButton.innerHTML = 'Delete Project';
    deleteButton.addEventListener('click', () => {
        deleteProject(project.ID);
    })

    contentDisplay.appendChild(deleteButton);

    display.appendChild(contentDisplay);
}

export default displayProject;