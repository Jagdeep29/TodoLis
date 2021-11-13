import React from "react";

const Todolists = (props) => {

return (
  <>
    <li>
     {props.text} <button onClick={()=>{
         props.onSelect(props.id);
     }}>Delete</button>
    </li>
  </>
);
};

export default Todolists;