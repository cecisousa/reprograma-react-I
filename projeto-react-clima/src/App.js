import React from 'react';
import Card from './componentes/Card'
import sol from './img/sol.png';
import nuvens from './img/nuvens.png';
import './App.css';

function App() {
  return (
    <div className="previsao-container">
      <Card 
        data = "31/05/2019"
        descricao = "Ensolarado"
        src = {sol}
        temperatura = {{
          maxima: 31,
          minima: 20
        }}
      />
      <Card 
        data = "01/06/2019"
        descricao = "Nublado"
        src = {nuvens}
        temperatura = {{
          maxima: 25,
          minima: 18
        }}
      />
    </div>
  );
}

export default App;
