'use client'
// FiltroComponente.js
import React, { useState } from 'react';
import styles from './styles/QuestionSeeds.module.css'; // Archivo de estilos CSS
import { candys, citric, cookies, diesel, fruits, tierra } from '../assets/seedsGame/images';

const FiltroComponente = ({ onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [gameStep, setGameStep] = useState(1);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNextStep = () => {
    setGameStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    onFilterChange(selectedOptions);
  };

  const optionClassName = (option) => {
    return selectedOptions.includes(option) ? `${styles.option} ${styles.active}` : styles.option;
  };

  return (
    <div>
      {gameStep === 1 && (
        <div>
          <div className={optionClassName('citrico')} onClick={() => handleOptionClick('citrico')}>
            Citrico
            {citric()}
          </div>
          <div className={optionClassName('diesel')} onClick={() => handleOptionClick('diesel')}>
            Diesel
            {diesel()}
          </div>
          <div className={optionClassName('terroso')} onClick={() => handleOptionClick('terroso')}>
            Terroso 
            {tierra()}
          </div>
          <div className={optionClassName('frutal')} onClick={() => handleOptionClick('frutal')}>
            frutal 
            {fruits()}
          </div>
          <div className={optionClassName('cookies')} onClick={() => handleOptionClick('cookies')}>
            Cookies 
            {cookies()}
          </div>
          <div className={optionClassName('caramelo')} onClick={() => handleOptionClick('caramelo')}>
            caramelo 
            {candys()}
          </div>
          <button onClick={handleNextStep}>Siguiente</button>
        </div>
      )}
      {/* Agregar más preguntas y casos según sea necesario */}
      {gameStep === 2 && (
        <div>
          <div className={optionClassName('opcion3')} onClick={() => handleOptionClick('opcion3')}>
            <img src="/ruta/a/opcion3.jpg" alt="Opción 3" />
          </div>
          <div className={optionClassName('opcion4')} onClick={() => handleOptionClick('opcion4')}>
            <img src="/ruta/a/opcion4.jpg" alt="Opción 4" />
          </div>
          <button onClick={handleNextStep}>Siguiente</button>
        </div>
      )}
      {gameStep === 3 && (
        <div>
          <div className={optionClassName('opcion5')} onClick={() => handleOptionClick('opcion5')}>
            <img src="/ruta/a/opcion5.jpg" alt="Opción 5" />
          </div>
          <div className={optionClassName('opcion6')} onClick={() => handleOptionClick('opcion6')}>
            <img src="/ruta/a/opcion6.jpg" alt="Opción 6" />
          </div>
          <button onClick={handleSubmit}>Aplicar filtros</button>
        </div>
      )}
    </div>
  );
};

export default FiltroComponente;
