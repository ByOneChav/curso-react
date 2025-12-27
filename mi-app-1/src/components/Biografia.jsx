import React from 'react';
import '../styles/Biografia.css';

function Biografia(props) {
  return (
    <div className='contenedor-biografia'>
      <img className='imagen-biografia' src={require(`../img/biografia-${props.imagen}.png`)} alt='foto de SADIE' />
      <div className='contenedor-texto-biografia'>
        <p className='nombre-biografia'> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-biografia'>{props.nombre} es una {props.cargo}  en <strong>{props.empresa}</strong>.</p>
        <p className='texto-biografia'>"{props.biografia}"</p>
      </div>
    </div>
  );
}

export default Biografia;