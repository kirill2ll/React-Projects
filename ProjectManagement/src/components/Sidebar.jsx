import Button from "./Button"

export default function Sidebar({ title, projects, handleAddProject, handleSelectProject, selectedProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">{title}</h2>
            {/* <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200" onClick={() => handleAddProject(true)}>Add Project</button> */}
            <Button handleAddProject={handleAddProject}>Add Project</Button>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-700";
                    if(project.name === selectedProject?.name){
                        cssClasses += " bg-stone-800 text-stone-200";
                    } else{
                        cssClasses += " text-stone-400";
                    }
                    

                    return <li key={project.name} onClick={() => handleSelectProject(project)} className={cssClasses}>{project.name}</li>
                })}
            </ul>
        </aside>
    )
}