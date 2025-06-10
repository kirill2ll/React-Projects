import { useRef } from "react";
import Input from "./Input";

export default function InputProject({ saveNewProject, handleAddProject }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    return (
        <section className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={() => handleAddProject(false)} className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button onClick={() => saveNewProject(title.current.value, description.current.value, dueDate.current.value)} className="bg-stone-800 hover:bg-stone-950 text-stone-50 px-6 py-2 rounded-md">Save</button>
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