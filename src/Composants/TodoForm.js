import React, {useState} from 'react'; 
import "./styles.css";

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <form className='todo-form'>
        <input type="text" placeholder="Ajouter un element" value={input} name="text" className='todo-input'/>
    </form>
    <button className='todo-button'>Ajouter un Element<button>
  )
}

export default Todoform;