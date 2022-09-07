import React from "react";
import styles from "./Content.module.css";

export default function Content({setView}) {


    const handleCreateRotine = () => {
      setView(true)
    }

  return (
    <div className={styles.container}>
      
      <div className={styles.contentForm}>
        <div className={styles.form}>
          <div className={styles.columm}>
            <label>
              <input type="checkbox" />
              <span>Quero Praticar Mais Esportes</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quero Ler Mais</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quero Me Exercitar Mais</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quero Investir</span>
            </label>
          </div>

          <div className={styles.columm}>
            <label>
              <input type="checkbox" />
              <span>Quero Praticar Coisas Novas</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quero Me Alimentar Bem</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quero Melhorar Minha Vida Financeira</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Quero Estudar Mais</span>
            </label>
            <label className={styles.hours}>
                <span>Quantas Horas Você Tem Disponivel Por Dia?</span>
                <input type="number" />
            </label>
          </div>

        </div>

        <button className="button" onClick={handleCreateRotine}>Criar Minha Roina</button>

      </div>
    </div>
  );
}
