import React from 'react';

const ClassificacaoIMC = ({ imc }) => {
    const classificacao = () => {
        if (imc === null) return '';
        if (imc < 18.5) return 'Abaixo do peso';
        else if (imc < 24.9) return 'Peso normal';
        else if (imc < 29.9) return 'Sobrepeso';
        else if (imc < 34.9) return 'Obesidade Grau 1';
        else if (imc < 39.9) return 'Obesidade Grau 2';
        else return 'Obesidade Grau 3';
    };

    return (
        imc !== null && (
            <div>
                <p>Classificação: {classificacao()}</p>
            </div>
        )
    );
};

export default ClassificacaoIMC;
