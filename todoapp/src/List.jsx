import React from 'react';

const List=(prop)=>{
  return(
      <>
      
      <div className="indlist">
    <button className="minus" onClick={()=>{
        prop.func(prop.id)
    }}>-</button>
    <li>{prop.elem}</li>
    
    </div>
    
    </>
  )
}

export default List;