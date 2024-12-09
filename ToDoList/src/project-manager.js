const createProject = (ID,Title,Description,DueDate,Priority,Checklist) => {
    let projects = [];
    projects.push({ID,Title,Description,DueDate,Priority,Checklist});
    return{projects,ID,Title,Description,DueDate,Priority,Checklist};
}

export default createProject;