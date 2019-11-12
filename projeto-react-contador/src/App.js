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
      contador: 0,
      visibilidade: false
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

  alternarVisibilidade = () => {
    this.setState((prevState) => {
      return {
        visibilidade: !prevState.visibilidade
      }
    })
  }
  
  render() {
    return (
      <div>
        <p className="resultado">{this.state.contador}</p>
        <button className="botao" onClick={this.alternarVisibilidade}>{this.state.visibilidade === true ? "Fechar Contador" : "Abrir Contador"}</button>
        {this.state.visibilidade === true ? (
          <div>
            <button className="botao" onClick={this.adicionarUm}>+1</button>
            <button className="botao" onClick={this.subtrairUm}>-1</button>
            <button className="botao" onClick={this.resetarContador}>Resetar</button>
          </div>
        ) : ""}
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
