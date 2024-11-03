import React from "react";
import style from './nivel.module.css';

export default function Nivel({label,value, className}){
    return(
        <div className={[style.nivel, className].join(' ')}>
         <span className={style.label}>{label}</span>
         <span className={style.value}>{value}</span>
        
        </div>
    )
}
