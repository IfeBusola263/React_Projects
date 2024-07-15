
import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTask] = useState(["Study My Bible"]);
    const [newTask, setNewTask] = useState("");


    function handleInputs(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if (newTask.trim() !== "") {
            setTask(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(idx){
        const updatedTasks = tasks.filter((_, index) => index !== idx);
        setTask(updatedTasks);
    }

    function moveUp(idx){

        if (idx > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[idx], updatedTasks[idx - 1]] = [updatedTasks[idx - 1], updatedTasks[idx]];
            setTask(updatedTasks);
        }

    }

    function moveDown(idx){

        if (idx < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[idx], updatedTasks[idx + 1]] = [updatedTasks[idx + 1], updatedTasks[idx]];
            setTask(updatedTasks);
        }

    }


    return(

        <>
            <div className="to-do-list">
                <h1>My To-do list</h1>
                <input  type="text" 
                        placeholder="Enter a task..." 
                        value={newTask} 
                        onChange={handleInputs} />
                <button className="add-button" onClick={addTask}>Add Task</button>
                <ol>
                    { tasks.map((task, index) => {

                        return <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>❌</button>
                            <button className="move-button" onClick={() => moveUp(index)}>⬆️</button>
                            <button className="move-button" onClick={() => moveDown(index)}>⬇️</button>
                        </li>
                    })}
                </ol>
            </div>
        </>
    )
}

export default ToDoList;