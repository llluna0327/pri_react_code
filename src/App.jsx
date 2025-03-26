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
      //Date.now() 生成一个唯一的时间戳作为任务的 ID。
      const newTasks = [...tasks, { id: Date.now(), text: taskText, completed: false }];
      setTasks(newTasks);
      setNewTask('');
    }
  };

  // 删除任务
  const deleteTask = (id) => {
    //updatedTasks 包含了除被删除任务外的所有任务。
    //filter() 方法创建一个新数组，其中包含所有满足条件的元素。
    //task.id !== id 保留所有 ID 与被删除任务的 ID 不同的任务。
    const updatedTasks = tasks.filter(task => task.id !== id);
    const completed = updatedTasks.filter(task => task.completed).length;
    setTasks(updatedTasks);
    setCompletedCount(completed);
  };

  // 切换任务完成状态
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task => 
      //如果不去判断id，那么每次点击都会改变所有任务的状态
      task.id === id ? { ...task, completed: !task.completed } : task
      // task.id = { ...task, completed: !task.completed }
    );
    //更新任务列表和已完成任务的数量
    setTasks(updatedTasks);
    //创建一个task.completed值为true的新数组，然后获取该数组的长度
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