import { useState } from 'react'

const TodoList = () => {

    const [tasks,setTasks] = useState<string[]>([])
    const [newTask,setNewTasks] = useState<string>('')

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        setNewTasks(event.target.value)
        
    }

    function addTask(){
        if (newTask.trim()){
            setTasks(t => [...t,newTask])
            setNewTasks("");

        }else{
            alert('enter a task')
        }
        console.log(newTask)
    }

    function editTask(index: number) {
        const edited = prompt('Edit task');
        if (edited !== null) {
          setTasks(t => {
            const updated = [...t]
            updated[index] = edited
            return updated
         } );
        }
      }
      
    function deleteTask(index:number){
        const updatedTasks = tasks.filter((elt,i) => i !== index);
        setTasks(updatedTasks)
    }

  return (
    <div className="container">
        <div className="todo-list">
            <h1>To-do List</h1>
            <input className="input" type="text" placeholder="enter a task..." onChange={handleInput} value={newTask}/>
            <button className='add btn' onClick={addTask}>Add</button>
        
        </div>
        <ul>
            { tasks.map((item:string,index:number) =>
                (
                    <li key={index} className='list'>
                        <p className='text'>{item}</p> 
                        <div className="buttons">
                            <button className="add" onClick={() =>editTask(index)}>edit</button>
                            <button className="add" onClick={() => deleteTask(index)}>delete</button>
                        </div>
                    </li>)
                )
            }
        </ul>
    </div>
  )
}

export default TodoList
