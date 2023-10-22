import { Button, Grid, TextField } from "@mui/material";


export const TaskInput = ({ task, tarea, onInputChange, onAddTask, onResetForm }) => {

  const onFormSubmit = () => {
    event.preventDefault();
    if( tarea.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      task: tarea,
      editing: false,
    }
  
  if(task.find(item => item.task === tarea)) return;

  
  onAddTask(newTodo);
  onResetForm();
}


     



  return (
    <Grid container className="somber" sx={{  width: '450px', height: '120px', borderRadius: 2, backgroundColor: "bisque", textAlign: 'center', justifyContent: 'center', border: 2, mb: 3}}>
        <Grid container  sx={{ display: 'flex', margin: 3, height: '120px', width: '430px' }}>
          <form onSubmit={onFormSubmit }>
          <Grid item sx={{ width: '300px', height: '100px'}}>
         <TextField type="text" label='Tarea' placeholder="Ingresa una tarea" fullWidth name="tarea" onChange={  onInputChange } value={tarea} />
         </Grid>
         </form>

         <Grid item ml={ 2 } mt={ 1 }>
       <Button onClick={ onFormSubmit } sx={{ width: '80px', heigt: '40px', backgroundColor: 'grey', color: 'white', ':hover': { color: 'grey', backgroundColor: 'white', border: 2 } }}>
          Agregar
         </Button>
       </Grid>
        </Grid>
       
        
    </Grid>
  )
}
