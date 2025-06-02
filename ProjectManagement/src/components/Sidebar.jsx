export default function Sidebar({ title, projects, handleAddProject, handleSelectProject }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => handleAddProject(true)}>Add Project</button>
            <ul className="project-list">
                {projects.map((project) => {
                    return <li key={project.name} onClick={() => handleSelectProject(project)}>{project.name}</li>
                })}
            </ul>
        </section>
    )
}