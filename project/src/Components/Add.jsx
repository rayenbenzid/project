import React from "react";

const Add = ({setshow_add,setnew_game,new_game,addgame}) => {
  return (
    <div className="modal">
      <div className="box add_mod">
        <button onClick={()=>setshow_add(false)}>X</button>
        <input type="text" onChange={(e)=>setnew_game({...new_game,image:e.target.value})} placeholder="image" />
        <input type="text" onChange={(e)=>setnew_game({...new_game,name:e.target.value})} placeholder="name" />
        <input type="text" onChange={(e)=>setnew_game({...new_game,price:e.target.value})} placeholder="price" />
        <button onClick={()=>{setshow_add(false);addgame()}}  >ADD</button>
      </div>
    </div>
  );
};

export default Add;
