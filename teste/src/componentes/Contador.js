import React from 'react';
import BotaoAbreFecha from './BotaoAbreFecha';
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
                <BotaoAbreFecha 
                    onClickAbreFecha = {this.alternarVisibilidade}
                    visibilidade = {this.state.visibilidade}
                />
                {this.state.visibilidade && (
                    <div>
                        <BotoesContador 
                            onClickAdicionar = {this.adicionarUm}
                            onClickSubtrair = {this.subtrairUm}
                            onClickResetar = {this.resetarContador}
                            desabilitado = {this.state.desabilitado}
                        />
                        {this.state.contador !== 0 && (
                            <BotaoFinalizar 
                                onClickFinalizar = {this.finalizarContador}
                            />
                        )}
                    </div>
                )}
            </div>
        )
    }

}

export default Contador;