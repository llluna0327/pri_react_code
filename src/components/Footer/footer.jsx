import React from 'react';
import './footer.css';

function footer({completedCount,totalTasks}){
    return (
        <div className='footer'>
            <div className='task-summary'>
                <h3>已完成{completedCount}/全部{totalTasks}</h3>
            </div>
        </div>
    )
}

export default footer