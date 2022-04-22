import styles from '../styles/ReservationsForm.module.css'
export default function ReservationsForm() {
  return (
    <form action='#' className={styles.container}>
      <label htmlFor='nombre' className={styles.label}>
        <span className={styles.span}>nombre*</span>
        <input
          className={styles.input}
          type='text'
          id='nombre'
          name='nombre'
          placeholder='nombre'
          autoComplete='name'
          required
        />
      </label>
      <label htmlFor='fecha-llegada' className={styles.label}>
        <span className={styles.span}>fecha*</span>
        <input
          className={styles.input}
          type='date'
          id='fecha-llegada'
          name='fecha-llegada'
          required
        />
      </label>
      <label htmlFor='hora-llegada' className={styles.label}>
        <span className={styles.span}>hora*</span>
        <input
          className={styles.input}
          type='time'
          id='hora-llegada'
          name='hora-llegada'
          required
        />
      </label>
      <label htmlFor='numero-personas' className={styles.label}>
        <span className={styles.span}>numero de personas*</span>
        <input
          className={styles.input}
          type='number'
          id='numero-personas'
          name='numero-personas'
          required
        />
      </label>
      <label htmlFor='alergias' className={styles.label}>
        <span className={styles.span}>alergias</span>
        <input
          className={styles.input}
          type='text'
          id='alergias'
          name='alergias'
          placeholder='ej. cacahuate'
        />
      </label>
      <label htmlFor='tipo-celebracion' className={styles.label}>
        <span className={styles.span}>tipo de celebracion*</span>
        <input
          className={styles.input}
          type='text'
          id='tipo-celebracion'
          name='tipo-celebracion'
          placeholder='ej. aniversario'
          required
        />
      </label>
      <label htmlFor='telefono' className={styles.label}>
        <span className={styles.span}>telefono*</span>
        <input
          className={styles.input}
          type='tel'
          id='telefono'
          name='telefono'
          placeholder='(984)-921-12-54'
          required
        />
      </label>
      <label htmlFor='email' className={styles.label}>
        <span className={styles.span}>email*</span>
        <input
          className={styles.input}
          type='email'
          id='email'
          name='email'
          placeholder='ejemplo@gmail.com'
          required
        />
      </label>
      <label htmlFor='comentarios' className={styles.label}>
        <span className={styles.span}>comentarios</span>
        <input
          className={styles.input}
          type='text'
          id='comentarios'
          name='comentarios'
          placeholder='asistiremos 2 adultos 2 menores'
        />
      </label>
      <p>Responderemos a la brevedad</p>
      <input className={styles.inputSubmit} type='submit' />
    </form>
  )
}
