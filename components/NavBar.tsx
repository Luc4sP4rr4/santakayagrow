'use client'
import { useState } from 'react';
import styles from './styles/NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/SantaKaya/isologoSantaKayaBlanco.png'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <span className={styles.navbarLogo}>
          <Image
          src={logo}
          alt='logo santa kaya'
          width={60}
          height={60}
          priority={true}
          className={styles.imagenLogo}/>
        </span>
        <button className={styles.navbarToggle} onClick={toggleMenu}>
          <span className={styles.navbarToggleIcon}>{isOpen ? '✖' : '☰'}</span>
        </button>
      </div>
      <div className={`${styles.navbarMenu} ${isOpen ? styles.isOpen : ''}`}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Inicio</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/tienda" className={styles.navLink}>Tienda</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/servicios" className={styles.navLink}>Servicios</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/semillas" className={styles.navLink}>Semillas</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>Conocenos</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contactus" className={styles.navLink}>Contacto</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/account" className={styles.navLink}>Mi Cuenta</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
