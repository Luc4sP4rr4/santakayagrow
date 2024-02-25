import styles from './dashboard.module.css'

export default function dashbaord (){
    return <div className={styles.bodydash}>

        <div className={`${styles.cards}`}>
            estadisticas
        </div>
        <div className={styles.cards}>
            mailbox
        </div>
        <div className={styles.cards}>
            productos
        </div>
        <div className={styles.cards}>
            usuarios
        </div>  
        <div className={styles.cards}>
            ventas
        </div>
        <div className={styles.cards}>
            ofertas
        </div>

    </div>
   }