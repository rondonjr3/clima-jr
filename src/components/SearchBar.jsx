import React from 'react';
  
import style from './searchbar.module.css'


export default function SearchBar(props) {
  // acá va tu código
  return( 
   <form className={style.searchBar}>
     <input className={style.imput} type="text" placeholder ='Ingresar Ciudad..'/>
     <button className={style.button} onClick={()=> props.onSearch("Buscando Ciudad..")}>Agregar </button>
   </form>
  )
};