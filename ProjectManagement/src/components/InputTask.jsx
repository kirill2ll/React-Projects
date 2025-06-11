import { useRef, useState } from "react"
import Modal from "./Modal";

export default function InputTask({ handleAddTaskToProject }) {
    const [enteredTask, setEnteredTask] = useState("");
    const modal = useRef(); 

    function AddTask() {
        const task = enteredTask.trim();
        if (task === "") {
            modal.current.showModal();
            return;
        }
        handleAddTaskToProject(task);
        setEnteredTask("");
    }


    return (
    <>
        <Modal ref={modal}>
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
            <p className='text-stone-600 mb-4'>The task cannot be empty</p>
        </Modal>
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask} onChange={(e) => setEnteredTask(e.target.value)} />
            <button className="text-stone-700 hover:text-stone-900" onClick={AddTask}>Add Task</button>
        </div>
    </>)
} 