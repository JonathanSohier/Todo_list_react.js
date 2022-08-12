import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit,setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id:null,
            value: ''
        });
    };
    
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} action="Modifier Element" />;
    };
    
  //Affichage
  return todos.map((todo, index) => (
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
          </div>
          <div className="image">
              <button onClick={() => removeTodo(todo.id)} className="button-delete-edit">Supprimer</button>
              <button onClick={() => setEdit({id : todo.id, value: todo.text })} className="button-delete-edit">Modifier</button>
          </div>
      </div>
  ))
}

export default Todo; 
