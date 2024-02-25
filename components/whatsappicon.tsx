'use client'
import React from 'react';
import styles from './styles/WhatsAppIcon.module.css';

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/3512662023`);
  };

  return (
    <div className={styles.whatsappIcon} onClick={handleWhatsAppClick}>
      <img 
        width="85"
        height="85"
        src="https://img.icons8.com/color/48/whatsapp--v1.png" 
        alt="whatsapp--v1"/>
    </div>
  );
};

export default WhatsAppIcon;
