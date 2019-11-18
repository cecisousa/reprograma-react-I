import React from 'react';

const BotaoFinalizar = props => {
    return (
        <div>
            <button className="botao" onClick={props.onClickFinalizar}>Finalizar Contador</button>
        </div>
    )
}

export default BotaoFinalizar;