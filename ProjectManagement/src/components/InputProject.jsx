import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function InputProject({ saveNewProject, handleAddProject }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function validateSaveNewProject() {
        const titleValue = title.current.value.trim();
        const descriptionValue = description.current.value.trim();
        const dueDateValue = dueDate.current.value.trim();

        if (titleValue === "" || descriptionValue === "" || dueDateValue === "") {
            modal.current.showModal();
            return;
        }

        saveNewProject(titleValue, descriptionValue, dueDateValue)
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
                <p className='text-stone-600 mb-4'>Please fill in all fields</p>
            </Modal>
            <section className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <button onClick={() => handleAddProject(false)} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    <button onClick={validateSaveNewProject} className="bg-stone-800 hover:bg-stone-950 text-stone-50 px-6 py-2 rounded-md">Save</button>
                </menu>
                <div>
                    <Input label="Title" type="text" ref={title} />
                    <Input label="Description" type="text" ref={description} isTextArea />
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
        </>
    );
}