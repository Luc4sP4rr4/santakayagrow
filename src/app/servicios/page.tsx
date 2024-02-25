import styles from './servicio.module.css'
export default function servicios (){
    return <div className={styles.bodydash}>

    <div className={`${styles.cards}`}>
        Pisar Rosin
    </div>
    <div className={styles.cards}>
        Reprocann
    </div>
    <div className={styles.cards}>
        Consulta Medica
    </div>
    <div className={styles.cards}>
        Asesoramiento en cultivo
    </div>

</div>
}