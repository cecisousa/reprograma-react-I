import React from 'react';
import './App.css';

const dadosPessoais = {
  nome: "Ceci",
  sobrenome: "Sousa"
}

const saudacao = obj => `Olá, ${obj.nome} ${obj.sobrenome}!`;

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
  }

  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  subtrairUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador - 1
      }
    })
  }

  resetarContador = () => {
    this.setState(() => {
      return {
        contador: 0
      }
    })
  }

  render() {
    return (
      <div>
        <p className="resultado">{this.state.contador}</p>
        <button className="botao btnMaisUm" onClick={this.adicionarUm}>+1</button>
        <button className="botao btnMenosUm" onClick={this.subtrairUm}>-1</button>
        <button className="botao btnReset" onClick={this.resetarContador}>Resetar</button>
      </div>
    )
  }
}

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
