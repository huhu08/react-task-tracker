import Task from "./Task"
import {FaTimes} from 'react-icons/fa'
const Tasks=({ tasks })=> {
 return(
<>
    {tasks.map((task)=> (

        // <h3 key={task.id}>{task.text}</h3>
      <Task key={task.id} text={task.text}/>,
      <faTimes style ={{ color:'red'}}/>
    ))}

</>
 )

}
export default Tasks