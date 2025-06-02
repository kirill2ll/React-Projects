import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import { useState, useRef } from "react";


function App() {
  const [projects, setProjects] = useState([]);
  const [displayNewProject, setDisplayNewProject] = useState(false);
  


  function handleAddProject(isVisible){
    setDisplayNewProject(isVisible);
  }

  function saveNewProject(title, description, dueDate){
    setProjects([...projects, {name: title, description, dueDate}]);
    setDisplayNewProject(false);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar title="Projects" projects={projects} handleAddProject={handleAddProject}/>

      {displayNewProject && <Project saveNewProject={saveNewProject} handleAddProject={handleAddProject}/>}
    </>
  );
}


export default App;
