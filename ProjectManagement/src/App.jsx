import InputProject from "./components/InputProject";
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


  function saveNewProject(title, description, dueDate) {
    setProjects([...projects, { name: title, description, dueDate }]);
    setDisplayNewProject(false);
    setSelectedProject(null);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar title="Projects"
        projects={projects}
        handleAddProject={handleAddProject}
        handleSelectProject={handleSelectProject} />

      {displayNewProject && <InputProject saveNewProject={saveNewProject} handleAddProject={handleAddProject} />}
      {selectedProject && <Project project={selectedProject} />}
    </>
  );
}


export default App;
