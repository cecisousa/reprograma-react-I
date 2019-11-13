import React from 'react';

const BotoesContador = props => {
    return (
        <div>
            <button className="botao" disabled={props.desabilitado} onClick={props.onClickAdicionar}>+1</button>
            <button className="botao" disabled={props.desabilitado} onClick={props.onClickSubtrair}>-1</button>
            <button className="botao" onClick={props.onClickResetar}>Resetar</button>
        </div>
    )
}

export default BotoesContador;