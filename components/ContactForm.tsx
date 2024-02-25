// components/ContactForm.tsx
'use client'
import { useState } from 'react';
import styles from './styles/ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simulación de envío del formulario, puedes implementar la lógica de envío del correo electrónico aquí
    console.log('Enviando correo electrónico...');
    console.log('Correo electrónico:', email);
    console.log('Asunto:', subject);
    console.log('Mensaje:', message);

    // Reiniciar el estado del formulario después de enviar
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      {isSubmitted ? (
        <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="subject">Asunto:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className={styles.btn} type="submit">Enviar mensaje</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
