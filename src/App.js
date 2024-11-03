import React from 'react';
import style from './App.module.css'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import cities, { Cairns } from './data.js';


function App() {
  return (
    <div className={style.app} >


     <h1 className={style.titulo}> Aplicacion del clima Rodolfo Rondon</h1>
      <header className={style.header}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
          
        />
      </header>
      <main className={style.main}>
        <section className={style.maincity}>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
            main={true}
          />
        </section>
        <p>


          
        </p>
  
        <section className={style.reelCity}>
          <Cards
            cities={cities}
          />
        </section> 

      </main>
    
     
    </div>
  );
}

export default App;