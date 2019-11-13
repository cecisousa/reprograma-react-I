import React from 'react';

const BotaoAbreFecha = props => {
    return (
        <div>
            <button className="botao" onClick={props.onClickAbreFecha}>{props.visibilidade === true ? "Fechar Contador" : "Abrir Contador"}</button>
        </div>
    )
}

export default BotaoAbreFecha;