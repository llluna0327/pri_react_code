import React from "react";
import './list.css'

function list({tasks,deleteTask,toggleComplete}){
    return(
        <div className="list">
            <div className='task-list'>
                {tasks.map(task=>(
                    <div key={task.id} className={`task-item${task.completed?'completed':''}`}>
                        <div className="task-checkbox">
                            <input type="checkbox"
                            checked={task.completed}
                            onChange={()=>toggleComplete(task.id)}/>
                        </div>
                        <div className="task-text">{task.text}</div>
                        <button className="delete-btn" onClick={()=>deleteTask(task.id)}>删除</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default list