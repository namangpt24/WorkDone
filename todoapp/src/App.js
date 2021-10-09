import React, { useState } from 'react';
import List from './List';
import ReactScrollablefeed from 'react-scrollable-feed';

const Appp=()=>{
  const[work,update]=useState("")

  const change=(obj)=>{
      return(
   update(obj.target.value)
      )
  }
  const[finalwork,update2]=useState([])
  
  const add=()=>{
    
    update2((objj)=>{
        return(
            [...objj,work]
    )
    })
    update("");
}

  const remove=(id)=>{
    
     
     
         update2((objjj)=>{
             return(
                 objjj.filter((elem,ind)=>{
                   return ind!==id
                 })
             )
         })
     
  }


  return(
      <div className="whole">
    <div className="main">
        <h1>TO-DO LIST</h1>
        <div className="input">
        <input type="text" placeholder="Add Your Work" onChange={change} value={work}></input>
        
        <button onClick={add}>+</button>
        </div>
         
        
        <div className="list">
            <ol>
            <ReactScrollablefeed type='boolean' Default={true}>
          {finalwork.map((item,index)=>{
              return(
            <>
                <List key={index} elem={item} id={index} func={remove}></List>
            </>
              )
          })}
          </ReactScrollablefeed>
          </ol>
        </div>
        
        
          
        
    </div>
    </div> 
  )

}

export default Appp;
