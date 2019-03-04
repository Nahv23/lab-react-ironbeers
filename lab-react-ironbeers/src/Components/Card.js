import React from 'react'


const Card = function (props) {


  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by1">
          <img src={props.url}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
          </div>
        </div>
        <div className="content">
        La cerveza (tanto con o sin alcohol), aparte de calmar la sed y levantar el ánimo 
        tiene un gran abanico de beneficios para nuestra salud; eso sí, nunca debe convertirse 
        en una excusa para sobrepasar los límites de moderación recomendados.
        </div>
      </div>
    </div>
  )
}

export default Card;