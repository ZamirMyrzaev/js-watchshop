import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import jpeg from '../../assets/img.jpeg'
import './Comments.css'

const Comments = () => {
    const [ todos, setTodos ] = useState([])
    const [ task, setTask ] = useState('')

    function handleTask(newObj){
        let newTodos = [...todos]
        newTodos.push(newObj)
        setTodos(newTodos)
    }
  
    useEffect(() => {
        const raw = localStorage.getItem('todos')
        setTodos(JSON.parse(raw))
     }, [])
   
   
     useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos))
     }, [todos])


    function handleInput(e){
        setTask(e.target.value)
    }


    function handleSave(){
        let newTask = {
            task,
            status: false,
            id: Date.now()
        }
        handleTask(newTask)
        setTask('')
    }

    const {
        handleLogout,
        user: { email },
      } = useAuth();
      console.log({ email });


    return (
        <>
        <div className='comBlock'>
            <input type="text" className="comInput" onChange={handleInput} value={task}/>
            <button onClick={handleSave}>Add Comment</button>
        </div>

 
 <div className="comments">
        {todos.map(item => (
            <div className="task">
                <div className="mainTaskBlock">
                     <img src={jpeg} alt="" />
                     <h5>{email}</h5>
                </div>
                <div className="mainTask">{item.task}</div>
            </div>
        ))}
 </div>
      
        </>
    );
};

export default Comments;