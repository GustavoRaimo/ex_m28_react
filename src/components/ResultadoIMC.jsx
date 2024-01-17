import React from 'react';

const ResultadoIMC = ({ imc }) => {
    return (
        imc !== null && (
            <div>
                <h2>Seu IMC é: {imc}</h2>
            </div>
        )
    );
};

export default ResultadoIMC;
