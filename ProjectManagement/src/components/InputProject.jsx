import { useRef } from "react";
import Input from "./Input";

export default function InputProject({ saveNewProject, handleAddProject }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    return (
        <section>
            <menu>
                <button onClick={() => handleAddProject(false)}>Cancel</button>
                <button onClick={() => saveNewProject(title.current.value, description.current.value, dueDate.current.value)}>Save</button>
            </menu>
            <div>
                <Input label="Title" type="text" ref={title} />
                <Input label="Description" type="text" ref={description} isTextArea/>
                <Input label="Due Date" type="date" ref={dueDate} />
            </div>
                {/* <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={title} />
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" ref={description} />
                </p>
                <p>
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" id="dueDate" ref={dueDate} />
                </p>
            </div> */}
        </section>
    );
}