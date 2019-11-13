import React from 'react';
import Contador from './componentes/Contador'
import './App.css';

const dadosPessoais = {
  nome: "Ceci",
  sobrenome: "Sousa"
}

const saudacao = obj => `Olá, ${obj.nome} ${obj.sobrenome}!`;

function App(props) {
  return (
    <div className="App">
      <h1>{saudacao(dadosPessoais)} Vamos usar essa aplicação?</h1>
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}

export default App;
