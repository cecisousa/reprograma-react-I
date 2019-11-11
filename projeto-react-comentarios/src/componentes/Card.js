import React from 'react';

const ComentarioDetalhesAutor = props => {
  return (
    <div>
      <h3 className="comentario__nome">{props.autor}</h3>
      <p className="comentario__subtitulo">{props.titulo}</p>
    </div>
  )
}

const ComentarioTexto = props => {
  return (
    <p>{props.comentario}</p>
  )
}

const Comentario = props => {
  return (
    <div>
      <ComentarioDetalhesAutor 
        autor = {props.autor}
        titulo = {props.titulo}
      />
      <hr />
      <ComentarioTexto
        comentario = {props.comentario}
      />
    </div>
  )
}

const Card = props => {
  return (
    <div className="comentario">
      <img className="comentario__perfil" src={props.src} />
      <Comentario
        autor = {props.autor}
        titulo = {props.titulo}
        comentario = {props.comentario}
      />
    </div>
  )
}

export default Card;
