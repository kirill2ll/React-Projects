import InputProject from "./components/InputProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import { useState, useRef } from "react";


function App() {
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

  function handleAddTaskToProject(project, task) {
    setProjects(prevProjects =>
      prevProjects.map(p =>
        p.name === project.name ? { ...p, tasks: [...p.tasks, task] } : p
      )
    );
  }
  

  function saveNewProject(title, description, dueDate) {
    setProjects([...projects, { name: title, description, dueDate, tasks: [] }]);
    setDisplayNewProject(false);
    setSelectedProject(null);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar title="Projects"
        projects={projects}
        handleAddProject={handleAddProject}
        handleSelectProject={handleSelectProject} />

      {displayNewProject ? <InputProject saveNewProject={saveNewProject} handleAddProject={handleAddProject} /> : <NoProjectSelected handleAddProject={handleAddProject}/>}
      {selectedProject && <Project project={selectedProject} handleAddTaskToProject={handleAddTaskToProject} />}
    </main>
  );
}


export default App;
