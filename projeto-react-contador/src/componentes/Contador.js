import React from 'react';
import BotaoAbrirFechar from './BotaoAbrirFechar';
import BotoesContador from './BotoesContador';
import BotaoFinalizar from './BotaoFinalizar';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            visibilidade: false,
            desabilitado: false
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
                contador: 0,
                desabilitado: false
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

    finalizarContador = () => {
        this.setState(() => {
            return {
                desabilitado: true
            }
        })
    }

    render() {
        return (
            <div>
                <p className="resultado">{this.state.contador}</p>
                <BotaoAbrirFechar
                    onClickMethod={this.alternarVisibilidade}
                    visibilidade={this.state.visibilidade}
                />
                {this.state.visibilidade && (
                    <div>
                        <BotoesContador
                            onClickMethod1={this.adicionarUm}
                            onClickMethod2={this.subtrairUm}
                            onClickMethod3={this.resetarContador}
                            onClickMethod4={this.finalizarContador}
                            desabilitado={this.state.desabilitado}
                            contador={this.state.contador}
                        />
                        <BotaoFinalizar />
                        )}
                </div>
                )}
            </div>
        )
    }

}

export default Contador;