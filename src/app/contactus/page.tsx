import ContactForm from "../../../components/ContactForm";
import InstagramIcon from "../../../components/InstagramIcon";
import WhatsAppIcon from "../../../components/whatsappicon";
import styles from './contact.module.css'


export default function contactus (){

   
 return <div className={styles.container}>
    <ContactForm/>
    <div className={styles.redes}>
      <div className={styles.red}>
         <p>nuestro</p>
         <br/>
         <p> Whatsapp</p>
         <br/>
         <WhatsAppIcon />
      </div>
      <div className={styles.red} >
         <p>nuestro</p> 
         <br/>
         <p>Instagram</p>
         <br/>
         <InstagramIcon />
      </div>
    </div>
 </div>
}