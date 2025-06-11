import InputTask from "./InputTask";

export default function Tasks({project, handleAddTaskToProject, handleDeleteTaskfromProject}) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <InputTask handleAddTaskToProject={handleAddTaskToProject}/>
        <p className="text-stone-800 my-4">This project doesn't have any tasks.</p>

        <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {project.tasks.map((task, index) => (
                <li key={index} className="flex justify-between my-4">
                    <span>{task}</span>
                    <button className="text-stone-600 hover:text-stone-950" onClick={() => handleDeleteTaskfromProject(task)}>Delete</button>
                </li>
            ))}</ul>
    </section>
}