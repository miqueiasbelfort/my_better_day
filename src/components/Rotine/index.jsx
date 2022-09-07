import styles from "./Rotine.module.css"
import React, {useState, useRef} from 'react'

export default function Rotine() {

  const descRef = useRef()

  const handleViewDesc = () => {
    descRef.current.classList.add(`${styles.descView}`)
  }

  return (
    <div className={styles.container}>
      <h2>Aqui está a sua Rotina personalizada de hoje!</h2>
      
      <ul className={styles.list}>
        <li className={styles.item} onClick={handleViewDesc}>
          <h3>Vamos aprender algo novo</h3>
          <span ref={descRef} className={`${styles.desc}`}>Vamos estudar para o enem de 2022 agora em?</span>
        </li>
      </ul>

    </div>
  )
}
