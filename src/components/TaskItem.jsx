import { DeleteForever, Edit } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";

export const TaskItem = ({ onEditingTask, t, onDeleteTask, onCompleteTask }) => {
  return (
  
    <Grid container spacing={ 1 } sx={{ display: 'flex', mb: 2, border: 1, borderRadius: 2, justifyContent: 'space-between' }}>
    <Typography variant="li" component="li" key={ t.id } sx={{ fontSize: 20, ml: 2, mt: 2, textDecorationLine: `${(t.done) ? 'line-through' : 'none'}`}} onClick={ () => onCompleteTask(t.id) }>{ t?.task }</Typography>
     <Grid item>
    <IconButton sx={{  color: 'darkred'}} onClick={ () => onDeleteTask(t.id) } >
    <DeleteForever sx={{  fontSize: 30 }} />
    </IconButton>
    <IconButton sx={{  color: 'rgb(207, 122, 43)'}} onClick={ () => onEditingTask(t.id) }  >
    <Edit sx={{  fontSize: 30 }} />
    </IconButton>
    </Grid>
    </Grid>
  

  )
}
