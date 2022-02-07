import React from 'react';

function TodoList(props) {
  const {completeTodo, deleteTodo}= props
  let todoArr=props.todoArr.length>0 ? props.todoArr : JSON.parse(localStorage.getItem('todos'))
  return (
  <div style={{maxHeight:"210px", overflowY:"auto"}}>
    <ul>
      {todoArr && todoArr.length > 0 ? 
      todoArr.map((el,i) => (
        <li key={i}>
        <div className={el["done"] ? "line-through" : null}>{el.title}</div>
        <div style={{display:"flex", justifyContent:"space-between", width:"50px"}}>
          <i title='complete' onClick={()=> completeTodo(i)} className={`fas fa-check-circle pointer ${el["done"] ? "green" : "blue"}`}/>
          <i title='Delete' onClick={() => deleteTodo(i)} className='fas fa-trash-alt pointer'/>
        </div>
      </li>

      )) : null
     
    } 
      

    </ul>

  </div>);
}

export default TodoList;
