import React from 'react';
import './Header.css';

function Header({ addTask, newTask, setNewTask }) {
  //e.target 是事件对象的一个属性，它表示触发事件的DOM元素。
  const handleInputChange=(e)=>{
    setNewTask(e.target.value)
  }

  const handleKeyPress=(e)=>{
    if(e.key==='Enter'){
      addTask(newTask)
      setNewTask('')
    }
  } 

  return (
      <div className="task-input-container">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
  );
}

export default Header;