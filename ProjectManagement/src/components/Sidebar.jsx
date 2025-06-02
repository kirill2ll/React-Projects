export default function Sidebar({ title, projects, handleAddProject }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => handleAddProject(true)}>Add Project</button>
            <ul className="project-list">
                {projects.map((project) => {
                    return <li key={project.name}>{project.name}</li>
                })}
            </ul>
        </section>
    )
}