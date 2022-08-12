import React, {useState} from 'react'; 

function TodoForm(props) {
  const [input, setInput] = useState('okok');
  
  const handleChange = e =>{
    setInput(e.target.value)
  }
  
  const  handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id:Math.floor(Math.random() * 10000),
      text:input
    });
    
    setInput('');
  };
  
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Ajouter un element" value={input} name="text" className='todo-input' onChange={handleChange}/>
        <button className='todo-button'>Ajouter un Element</button>
    </form>
  )
}

export default TodoForm;