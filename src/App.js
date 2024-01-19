import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import Tasks from './components/tasks';


function App() {
const [tasks,setTasks]=useState([
{ id:1,
text:'Daily Pilates',
reminder:true,
date:'February 2022'},
{id:1,
  text:'Daily Pilates',
  reminder:true,
  date:'February 2022'

},
{id:1,
  text:'Daily Pilates',
  reminder:true,
  date:'February 2022'

},
])
  return (
    <div className="App">
       <Header />
       <Tasks tasks={tasks}/>
    </div>
  );

}


export default App;
