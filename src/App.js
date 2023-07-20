import { useState } from "react";
import { Form } from "./Components/Form";



function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <Form setTasks={setTasks}/>
    </div>
  )
}

export default App;
