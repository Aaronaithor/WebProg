const deleteProject = (id) =>{
    const display = document.querySelector('.projectDisplay');
    const displayContent = document.querySelector('.contentDisplay');

    if (displayContent){
        display.removeChild(displayContent);
    }

    const projectContainer = document.querySelector('.projectContainer');
    const project = document.querySelector(id);

    if (project){
        projectContainer.removeChild(project);
    }
}

export default deleteProject;