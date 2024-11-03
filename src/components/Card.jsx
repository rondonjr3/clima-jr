import React from 'react';
import Nivel from './Nivel';
import style from './card.module.css'



export default function Card(props,) {

    //nos traeremos de la app (max,min,img,name, onClose)
  return ( 
    <div className={[style.card, props.main? style.mainCard : ''].join(' ')}>
    <> <button onClick={props.onClose} className={style.cardbtn}>Eliminar</button>
       <h2 className={style.name}>{props.name}</h2></>
       <img className={style.icono} src={`http://openweathermap.org/img/wn/${props.img}@2x.png` } alt=""/>
     <section className={style.section}>
       < Nivel className={style.nivel} label ='Min' value={props.min}/>
       < Nivel className={style.nivel} label ='Max' value={props.max}/>
     </section>
  </div>
    )
};
