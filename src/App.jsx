import React, { useState } from 'react';
// import './App.css';
import Header from './components/header/header';
import List from './components/List/list';
import Footer from './components/Footer/footer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  // 添加任务
  const addTask = (taskText) => {
    //trim 移除字符串两端的空格 确保输入有效内容
    //使用扩展运算符 ... 复制现有的任务数组 tasks。
    if (taskText.trim() !== '') {
      const newTasks = [...tasks, { id: Date.now(), text: taskText, completed: false }];
      setTasks(newTasks);
      setNewTask('');
    }
  };

  // 删除任务
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    const completed = updatedTasks.filter(task => task.completed).length;
    setTasks(updatedTasks);
    setCompletedCount(completed);
  };

  // 切换任务完成状态
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const completed = updatedTasks.filter(task => task.completed).length;
    setCompletedCount(completed);
  };

  return (
    <div className="app">
      <Header addTask={addTask} newTask={newTask} setNewTask={setNewTask}/>
      <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      <Footer completedCount={completedCount} totalTasks={tasks.length} /> 
    </div>
  );
}

export default App;