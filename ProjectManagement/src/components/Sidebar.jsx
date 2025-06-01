export default function Sidebar({ title, projects, handleAddProject }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => handleAddProject("New Project")}>Add Project</button>
            <ul className="project-list">
                {projects.map((project, index) => {
                    return <li key={index}>{project.name}</li>
                })}
            </ul>
        </section>
    )
}