import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Bio.module.scss'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "fd.salazaraguirre@gmail.com",
    size: 56,
  })

  const Hexagon = ({ value }) =>{
    const classes = 'hexagon r' + value;
    return <div className={classes}></div>;
  };
  
  function addHexes(r) {
      for(var i = 1; i <= (6 * r); i++) {
        ReactDOM.render(
          <Hexagon value={r} />,
          document.getElementById('backcontainer')
        );
      }
  }
  
  ReactDOM.render(
    <Hexagon value={0} />,
    document.getElementById('backcontainer')
  );
  
  var radius = 8 //Hex-radius
  
  for(var r = 1; r < radius; ++r) {
    addHexes(r);
  } 
  
  return (
    <div>
      <div className={`
          ${styles.Bio}
          ${props.className || ''}
        `}>
          <img src={photoURL} alt="Me" />
          <p>
            Ideas and solutions of a Jack of all trades, master of none but oftentimes better than a master of one. Still looking for improving all trades, by{' '}
            <a href="https://github.com/fsalazarnearbpo">Francisco Daniel Salazar Aguirre</a>.
            
          </p>
        </div>
      <div id='backcontainer'>
      </div>
    </div>
  )
}

export default Bio
