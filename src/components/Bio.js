import React from 'react'
import styles from './Bio.module.scss'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "fd.salazaraguirre@gmail.com",
    size: 56,
  })
  
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
    </div>
  )
}

export default Bio
