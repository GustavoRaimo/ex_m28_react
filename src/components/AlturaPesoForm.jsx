import React from 'react';

const AlturaPesoForm = ({ altura, setAltura, peso, setPeso, calculaImc }) => {
    return (
        <form className='form-inline' onSubmit={(evento) => evento.preventDefault()}>
            <div className='form-group mb-2'>
                <label>Altura (cm): </label>
                <input
                    type="number"
                    className='form-control'
                    value={altura}
                    onChange={(evento) => setAltura(evento.target.value)}
                />
            </div>
            <div className='form-group mb-2'>
                <label>Peso (kg): </label>
                <input
                    type="number"
                    className='form-control'
                    value={peso}
                    onChange={(evento) => setPeso(evento.target.value)}
                />
            </div>
            <button onClick={calculaImc} className='btn btn-primary form-group'>
                Calcular IMC
            </button>
        </form>
    );
};

export default AlturaPesoForm;
