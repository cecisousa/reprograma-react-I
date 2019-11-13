import React from 'react';

const BotoesContador = props => {
    return (
        <div>
            <button className="botao" disabled={props.desabilitado} onClick={props.onClickMethod1}>+1</button>
            <button className="botao" disabled={props.desabilitado} onClick={props.onClickMethod2}>-1</button>
            <button className="botao" onClick={props.onClickMethod3}>Resetar</button>
        </div>
    )
}

export default BotoesContador;