import React from 'react';

const BotaoAbrirFechar = props => {
    return (
        <div>
            <button className="botao" onClick={props.onClickMethod}>{props.visibilidade === true ? "Fechar Contador" : "Abrir Contador"}</button>
        </div>
    )
}

export default BotaoAbrirFechar;