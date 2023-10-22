import { useForm } from "../hooks/useForm";
import { useTaskFunction } from "../hooks/useTaskFunction";
import { LayoutTask } from "../layout/LayoutTask";
import { StatisticsTask } from "./StatisticsTask";
import { TaskList } from "./TaskList";


 
export const TaskContainer = () => {
  



const {tarea, onInputChange, onResetForm, formState, SetFormState } = useForm({ tarea: '' })
const {task, onAddTask, onDeleteTask, onCompleteTask, onEditingTask, editTask } = useTaskFunction([]);


  return (
    <LayoutTask>
      <StatisticsTask task={task} />
      <TaskList  editTask={ editTask}  onEditingTask={ onEditingTask } task={task } onDeleteTask={ onDeleteTask } onCompleteTask={ onCompleteTask } tarea={ tarea } onAddTask={ onAddTask } onInputChange={ onInputChange } onResetForm={ onResetForm }/>
    </LayoutTask>
     

  
  )
}
