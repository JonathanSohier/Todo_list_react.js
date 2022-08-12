import React,{useState,} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    //Ajoute element
    const addTodo = todo =>{    
        //Verifie que la ligne n'est pas vide et supprime les espaces en trop 
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        
        const newTodos = [todo,...todos]
        
        setTodos(newTodos)
        console.log(todo,...todos);
    };
    
    //Modifie Element
    const updateTodo = (idTodo, newValue)=> {
        //Verifie que la ligne n'est pas vide et supprime les espaces en trop 
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        
        setTodos(prev => prev.map(item => (item.id === idTodo ? newValue : item))
        );
        
    }   
    
    //Supprime Elements
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id != id)
        
        setTodos(removeArr);
    }
    
    //Actualise l'element 
    const completeTodo = id => {
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    
  //Affichage 
  return (
    <div className = "list">
        <h1>Choses à faire</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>  
    </div>
  );
}

export default TodoList; 
