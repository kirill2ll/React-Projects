export default function Project({ project }) {
    return (
        <div className="project">
            <h2>{project.name}</h2>
            <h6>{project.dueDate}</h6>
            <p>{project.description}</p>


        </div>
    )
}