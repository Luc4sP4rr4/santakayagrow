'use client'
import styles from './styles/insta.module.css'
export default function InstagramIcon () {
   
        const handleInstaClick = () => {
          window.open ('https://www.instagram.com/santakaya.grow/');
        };

    return (
      <div className={styles.instalogo} onClick={handleInstaClick}>
        <img 
        width="85" 
        height="85" 
        src="https://img.icons8.com/fluency/48/instagram-new.png" 
        alt="instagram-new"/>
      </div>
    );
  };
 