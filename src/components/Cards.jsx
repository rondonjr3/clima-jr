import React from 'react';
import Card from './Card';
import style from './cards.module.css'

export default function Cards(props) {
   //props es un arreglo  props = {cities = [Londres, Cairns, Denver];}
  // acá va tu código
  // tip, podés usar un map
   //if(!props.cities){
    // alert(`No hay ciudades Disponibles`);
   // return <h1>No hay ciudades Diponibles</h1>
  // }

  return (
   <div className={style.cards}> 
     
     { props.cities.map(city =>(
      <Card
       key ={city.id}
       max ={city.main.temp_max}
       min ={city.main.temp_min}
       name ={city.name}
       img ={city.weather[0].icon}
       onClose={()=>alert(city.name)}
    
       />))
   }</div>)
};