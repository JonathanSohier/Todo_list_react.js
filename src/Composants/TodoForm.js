import React, {useState, useEffect, useRef} from 'react'; 

function TodoForm(props) {
  const [input, setInput] = useState('');
  
  const inputRef = useRef(null)
    
  //Pour Ecrire directement dans l'input
  useEffect(() => {
      inputRef.current.focus();
  })
    
  const handleChange = e =>{
    setInput(e.target.value)
  }
  
  const  handleSubmit = e => {
    e.preventDefault();
    
    //ajoute le text avec son id dans le tableau d'element 
    props.onSubmit({
      id:Math.floor(Math.random() * 10000),
      text:input
    });
    
    //Puis réinitialise l'input 
    setInput('');
  };
  
  //Affichage
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Element" value={input} name="text" className='todo-input' onChange={handleChange} ref={inputRef}/>
        <button className='todo-button'>Valider</button>
    </form>
  )
}

export default TodoForm;