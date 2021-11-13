import React from 'react';
import { useState } from 'react';
import Todolist from './Todolist';

const App = () => {

  const[inputList,setInputList]= useState("");
  const [Items, setItems] = useState([]);
  

  const itemEvent = (event) =>{
    setInputList(event.target.value);

  };

  const listItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList]
    })
    setInputList("");
  };
  const deleteItems = (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElm,index)=>{
        return index !==id;
      })
    })

  }
  const handleKeyDown = (event) =>{
    if(event.key == "Enter"){
     listItems();
    }
  }
  return (
    <>
    <div className="main-div">
      <div className="center-div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a items"  value={inputList} onChange={itemEvent} onKeyDown={handleKeyDown}/>

        <ol>
         
            { Items.map((itemval,index ) =>{
               return (
                 <Todolist
                 key={index}
                 id={index}
                 text={itemval}
                 onSelect={deleteItems}/>
               );
            
               
            })}
            
         
        </ol>
      </div>
    </div>

    </>
  )
}

export default App;
