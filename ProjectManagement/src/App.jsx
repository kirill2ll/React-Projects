import Sidebar from "./components/Sidebar";
import { useState, useRef } from "react";


function App() {
  const [projects, setProjects] = useState([]);
  const inputProject = useRef();


  function handleAddProject(name){
    setProjects([...projects, {name: name, tasks: []}])
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar title="Projects" projects={projects} ref={inputProject} handleAddProject={handleAddProject}/>
    </>
  );
}

export default App;
