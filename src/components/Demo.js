import React from "react";
// import MadeGoal from "./MadeGoal";
// import MissedGoal from "./MissedGoal";
const demo= (props) => {
     const a = 10;
    //   if(bool){
    //         return <MadeGoal />;
    //     }
    //     return <MissedGoal />;
    
  const handleClick = (x,y) => {
    alert(x+y);
  };
     return ( 
        <div>
             <h2>New component</h2>
             {a === 10 && <h4>{props.para}</h4>}

             <button onClick={() => handleClick(10,50)}>Button</button>
         </div>
     );
};

export default demo;