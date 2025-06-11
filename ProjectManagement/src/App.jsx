import InputProject from "./components/InputProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import { useState, useRef } from "react";


function App() {
  // const [projectsState, setProjectsState] = useState({
  //   projects : [],
  //   selectedProjectId : undefined //undefined : no project selected, null : add new project, 
  // })

  const [projects, setProjects] = useState([]);
  const [displayNewProject, setDisplayNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null)

  function handleAddProject(isVisible) {
    setDisplayNewProject(isVisible);
    setSelectedProject(null);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
    setDisplayNewProject(false);
  }

  function handleAddTaskToProject(task) {
    setSelectedProject(prevProject => {
      return { ...prevProject, tasks: [task, ...prevProject.tasks] }
    })
  }

  function handleDeleteTaskfromProject(taskToRemove) {
    setSelectedProject(prevProject => {
      return { ...prevProject, tasks: prevProject.tasks.filter(task => taskToRemove !== task) }
    })
  }

  function saveNewProject(title, description, dueDate) {
    setProjects([...projects, { name: title, description, dueDate, tasks: [], id: Math.random() }]);
    setDisplayNewProject(false);
    setSelectedProject(null);
  }

  function handleDeleteProject() {
    setProjects(prevProjects => prevProjects.filter(p => p.id !== selectedProject.id));
    setSelectedProject(null);
  }


  let content;
  if (displayNewProject) {
    content = <InputProject saveNewProject={saveNewProject} handleAddProject={handleAddProject} />
  } else if (selectedProject) {
    content = <Project project={selectedProject} handleAddTaskToProject={handleAddTaskToProject} handleDeleteTaskfromProject={handleDeleteTaskfromProject} handleDeleteProject={handleDeleteProject} />
  } else {
    content = <NoProjectSelected handleAddProject={handleAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar title="Projects"
        projects={projects}
        handleAddProject={handleAddProject}
        handleSelectProject={handleSelectProject}
        selectedProject={selectedProject}
      />

      {content}

      {/* {displayNewProject ? <InputProject saveNewProject={saveNewProject} handleAddProject={handleAddProject} /> : <NoProjectSelected handleAddProject={handleAddProject}/>}
      {selectedProject && <Project project={selectedProject} handleAddTaskToProject={handleAddTaskToProject} />} */}
    </main>
  );
}


export default App;
