import React, { useState } from 'react';

const Elementos = () => {
    const [nuevoTitulo, setNuevoTitulo] = useState('');

    const cambio = (evento) => {
        setNuevoTitulo(evento.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={nuevoTitulo} 
                onChange={cambio} 
            />
        </div>
    );
};

export default Elementos
