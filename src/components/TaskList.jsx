import {  Grid, Typography } from "@mui/material";
import { TaskInput } from "./TaskInput";
import { TaskInputEdit } from "./TaskInputEdit";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ editTask, onEditingTask, task, onDeleteTask, onCompleteTask, tarea, onInputChange, onAddTask, onResetForm }) => {

  return (
    <Grid container className="table" sx={{ padding: 1, width: '700px', borderRadius: 3, minHeight: '350px', mb: 5 }}>
       <Grid container sx={{ display: 'block', width: '450px', padding: '5', ml: 15, minHeight: '200px' }}>
       <TaskInput task={ task } tarea={ tarea }  onInputChange={ onInputChange } onAddTask={ onAddTask } onResetForm={ onResetForm } />
      { 
      task.length == 0 ? <Grid item sx={{ width: '400px', height: '65px', border: '2px solid black', textAlign: 'center', margin: 'auto', borderRadius: 3, backgroundColor: 'black', opacity: 0.5, outline: 'solid bisque' }}>
        <Typography variant="h4" component="h4" sx={{ mt: 1, color: 'bisque' }}>
        No se encuentran tareas</Typography>
        </Grid>
       :
       task.map(t => ( 
        t.editing ? (<TaskInputEdit key={ t.id } editTaskEnd={ editTask } t={ t } task={ task } />) 
        :
       (<TaskItem onEditingTask={ onEditingTask } key={ t.id } t={ t } onDeleteTask={ onDeleteTask } onCompleteTask={ onCompleteTask } />
       )
       ))
      }
      </Grid>

    </Grid>
  )
}
