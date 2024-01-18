
import { useState } from "react"
import Task from "./Task"
const Tasks=()=>{
 return(
<div className="task">
    {Tasks.map((task)=>
    <Task key={task.id} task={task.text}/>)}

</div>
 )

}
export default Tasks