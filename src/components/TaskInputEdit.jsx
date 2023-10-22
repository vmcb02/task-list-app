import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";


export const TaskInputEdit = ({ editTaskEnd, t, task }) => {

  const [formState, setFormState] = useState(t.task);
    
  const onInputChangeEdit = ( event ) => {
    const value = event.target.value;
    setFormState( value );
    
  }

  const onResetForm = () => {
      setFormState(formState)
  }


  const onFormSubmitEdit = () => {
    event.preventDefault();
    if( formState.length <= 1) return;

  
  if(task.find(item => item.task === formState)) return;

  
  editTaskEnd(formState, t.id);
  onResetForm();
}


     



  return (
    <Grid container sx={{ display: 'flex',  width: '450px', height: '85px', borderRadius: 4, textAlign: 'center', justifyContent: 'center', border: 2, pb: 4, pt: 2, mb: 3, mr: 3 }}>
        <Grid container  sx={{ display: 'flex', width: '430px', justifyContent: 'center' }}>
          <form onSubmit={ onFormSubmitEdit }>
          <Grid item sx={{ width: '300px' }}>
         <TextField sx={{ height: '40px'}} type="text" label='Tarea' placeholder="Ingresa una tarea" fullWidth name="tareaEdit" onChange={ (event) => onInputChangeEdit(event) } value={ formState } />
         </Grid>
         </form>
        

         <Grid item ml={ 2 } mt={ 1 } >
       <Button onClick={ onFormSubmitEdit } sx={{ width: '80px', heigt: '30px', backgroundColor: 'black', color: 'white', opacity: 0.9, ':hover': { color: 'white', backgroundColor: 'grey', border: 1 } }}>
          <Typography variant="p" component="p" sx={{ fontSize: '12px' }}>Modificar</Typography>
         </Button>
       </Grid>
        </Grid>
       
        
    </Grid>
  )
}
