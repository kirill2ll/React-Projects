export default function Sidebar({ title, projects, ref, handleAddProject }) {
    return (
        <section>
            <h1>{title}</h1>
            <input type="text" ref={ref} />
            <button onClick={() => handleAddProject(ref.current.value)}>Add Project</button>
            <ul className="project-list">
                {projects.map((project) => {
                    return <li key={project.name}>{project.name}</li>
                })}
            </ul>
        </section>
    )
}