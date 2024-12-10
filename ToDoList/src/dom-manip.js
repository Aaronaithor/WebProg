import createProject from "./project-manager";
import displayProject from "./projectDisplay";

let numberOfProjects = 0;

function init(){
    const content = document.querySelector('.content');

    const heading = document.createElement('h1');
    heading.textContent = 'To-Do List';
    content.appendChild(heading);

    // Div to display the main content
    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    // Div to contain all projects
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');

    // Deafult project 
    const placeholderProject = document.createElement('div');
    placeholderProject.classList.add('project');
    placeholderProject.classList.add(`project${numberOfProjects}`);
    const project = createProject(`.project${numberOfProjects}`,"Default Project", "First Project", "12/09/2024","Low","Task1,Task2,Task3");
    numberOfProjects++;
    placeholderProject.textContent = project.Title;
    placeholderProject.addEventListener('click', () => {
        displayProject(project);
    })

    projectContainer.appendChild(placeholderProject);
    
    const addProjectBtn = document.createElement('div');
    addProjectBtn.classList.add('project');
    addProjectBtn.classList.add('addProjectBtn');
    addProjectBtn.textContent = "+ Add New Project";
    addProjectBtn.addEventListener('click', () => {
        createNewProject();
    })

    projectContainer.appendChild(addProjectBtn);

    mainContent.appendChild(projectContainer);

    const display = document.createElement('div');
    display.classList.add('projectDisplay');

    mainContent.appendChild(display);

    content.appendChild(mainContent);
}

const createNewProject = () => {
    const projectContainer = document.querySelector('.projectContainer');
    const addProjectBtn = document.querySelector('.addProjectBtn');

    let title = prompt("Please, enter a title");
    let description = prompt("Please, enter a description");
    let dueDate = prompt("Please, enter a due date");
    let priority = prompt("Please, enter a priority");
    let checklistNumber = prompt("Please, enter the number of tasks");

    while(isNaN(checklistNumber)){
        checklistNumber = prompt("Please, enter a number");
    }

    let checksString = "";

    for(let i = 0; i < parseInt(checklistNumber); i++){
        let task = prompt(`Please enter your task number ${i+1}`);
        if (i != parseInt(checklistNumber)-1){
            checksString += task+',';
        }else{
            checksString += task;
        }
    }

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.classList.add(`project${numberOfProjects}`);
    const project = createProject(`.project${numberOfProjects}`,title, description, dueDate,priority,checksString);
    numberOfProjects++;
    projectDiv.textContent = title;
    projectDiv.addEventListener('click', () => {
        if(displayContent){
            display.removeChild(displayContent);
        }
        displayProject(project);
    })
    
    if(addProjectBtn){
        projectContainer.removeChild(addProjectBtn);
    }

    projectContainer.appendChild(projectDiv);

    const addProjectBtnNew = document.createElement('div');
    addProjectBtnNew.classList.add('project');
    addProjectBtnNew.classList.add('addProjectBtn');
    addProjectBtnNew.textContent = "+ Add New Project";
    addProjectBtnNew.addEventListener('click', () => {
        createNewProject();
    })

    projectContainer.appendChild(addProjectBtnNew);
}

export default init;