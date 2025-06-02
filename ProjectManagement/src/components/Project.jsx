import { useRef } from "react";

export default function Project({saveNewProject, handleAddProject}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    return (
        <section>
            <button onClick={() => handleAddProject(false)}>Cancel</button>
            <button onClick={() => saveNewProject(title.current.value, description.current.value, dueDate.current)}>Save</button>

            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={title}/>
            

            <label htmlFor="description">Description</label>
            <input type="text" id="description" ref={description} />

            <label htmlFor="dueDate">Due Date</label>
            <input type="date" id="dueDate" ref={dueDate} />

        </section>
    );
}