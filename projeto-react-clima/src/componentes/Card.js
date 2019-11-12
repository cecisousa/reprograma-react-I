import React from 'react';

const Card = props => {
    return (
        <div className="previsao">
            <h2 className="previsao__data">{props.data}</h2>
            <p className="previsao__resumo">{props.descricao}</p>
            <img className="previsao__img" src={props.src}/>
            <table className="previsao-temperatura">
                <tr className="previsao-temperatura__linha">
                    <td className="bold">Máxima</td>
                    <td>{props.temperatura.maxima}°C</td>
                </tr>
                <tr className="previsao-temperatura__linha">
                    <td className="bold">Mínima</td>
                    <td>{props.temperatura.minima}°C</td>
                </tr>
            </table>
        </div>
    )
}

export default Card;