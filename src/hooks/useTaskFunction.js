import { useEffect, useState } from "react";

export const useTaskFunction = (initialValue) => {
  
    const [task, setTask] = useState(initialValue);







const onAddTask = (newTodo) => {

  
  setTask([ ...task, newTodo ]);
  
}

const onDeleteTask = (id) => {
 setTask(task.filter(t => t.id !== id));
 
 
}

const onCompleteTask = (id) => {
  setTask(task.map(t => {
    if(t.id === id){
      return {
        ...t,
        done: !t.done
      }
    }
    return t;
  }))
}

const onEditingTask = (id) => {
 setTask(task.map(t => {
  if(t.id === id){
    return {
      ...t,
      editing: !t.editing
    }
  }
  return t;
 }))

}

const editTask = ( newTask, id ) => {
  setTask( task.map(t => t.id === id ? { ...t, task: newTask, editing: !t.editing} : t ))
 
}


useEffect(() => {
 const data = localStorage.getItem('tasks');
 if( data ){
  setTask( JSON.parse( data ) );
 }
 
}, []);

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(task))
}, [task])



console.log( task );

 return {
    task,
    onAddTask,
    onDeleteTask,
    onCompleteTask,
    onEditingTask,
    editTask
 }
}
