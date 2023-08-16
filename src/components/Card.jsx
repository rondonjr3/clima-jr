import React from 'react';

export default function Card(props) {

    //nos traeremos de la app (max,min,img,name, onClose)
  return ( 
  <div>
     <><button onClick={props.onClose}>x</button> 
   
     <h2>{props.name}</h2></>
     <p>Min</p>
     <p>{props.min}</p>
     <p>Max</p>
     <p>{props.max}</p>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png` } alt=""/>
  </div>
    )
};
