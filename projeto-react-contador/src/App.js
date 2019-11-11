import React from 'react';
import logo from './logo.svg';
import './App.css';

const dadosPessoais = {
  nome: "Ceci",
  sobrenome: "Sousa"
}

const saudacao = obj => `Olá, ${obj.nome} ${obj.sobrenome}!`;

const contador = 0;

const retornoDoContador = () => {
  if (contador === 0) {
    return "Contador não iniciado"
  } else {
    return "Contador iniciado"
  }
}

function App() {
  return (
    <div className="App">
      <h1>{saudacao(dadosPessoais)} Vamos usar essa aplicação?</h1>
      <h2>Contador</h2>
      <p className="resultado">{contador}</p>
      <p className="retornoDoContador">{retornoDoContador()}</p>
      <button className="botao btnMaisUm">+1</button>
      <button className="botao btnMenosUm">-1</button>
      <button className="botao btnReset">Resetar</button>
    </div>
  );
}

// document.querySelector(".btnMaisUm").addEventListener("click", function(){
//   contador += 1
// });



export default App;
