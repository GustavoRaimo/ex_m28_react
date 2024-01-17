import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlturaPesoForm from './components/AlturaPesoForm';
import ResultadoIMC from './components/ResultadoIMC';
import ClassificacaoIMC from './components/ClassificacaoIMC';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calculaImc = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado.toFixed(2));
    } else {
      alert('Por favor, insira a altura e o peso.');
    }
  };

  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center text-center vh-100 text-primary-emphasis bg-primary-subtle'>
        <h1>Calculadora de IMC</h1>
        <AlturaPesoForm altura={altura} setAltura={setAltura} peso={peso} setPeso={setPeso} calculaImc={calculaImc} />
        <ResultadoIMC imc={imc} />
        <ClassificacaoIMC imc={imc} />
      </div>
    </>
  );
}

export default App;
