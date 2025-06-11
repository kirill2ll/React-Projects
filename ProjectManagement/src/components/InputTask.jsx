import { useState } from "react"

export default function InputTask({handleAddTaskToProject}) {
    const [enteredTask, setEnteredTask] =  useState("");

    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask} onChange={(e) => setEnteredTask(e.target.value)} />
        <button className="text-stone-700 hover:text-stone-900" onClick={() => handleAddTaskToProject(enteredTask)}>Add Task</button>
    </div>
} 