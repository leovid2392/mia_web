import TitleSection from './TitleSection'

import styles from '../styles/NewsLetter.module.css'

export default function NewsLetter() {
  return (
    <section className={styles.container}>
      <TitleSection text='Próximas Promociones' />
      <p className={styles.text}>
        Suscríbete aquí y recibe todas las promociones
      </p>
      <form action=''>
        <div className={styles.emailInput}>
          <input
            className={styles.input}
            type='mail'
            name='email'
            placeholder='escribe tu email'
            required
          />
          <input
            className={styles.btnSubmit}
            type='submit'
            value='enviar'
          ></input>
        </div>
        <div className={styles.politcaPrivacidad}>
          <label className={styles.label} htmlFor='politicas'>
            He leído política de privacidad
          </label>
          <input
            className={styles.checkBox}
            type='checkbox'
            name='politicas'
            required
          />
        </div>
      </form>
    </section>
  )
}
