import React, { useState } from 'react';
import FormularioEvento from './src/components/FormularioEvento';
import './css/index.css';
import ListaProductos from './src/components/ListaProductos';

const App = () => {
    const [eventos, setEventos] = useState([]);

    const agregarEvento = (nuevoEvento) => {
        setEventos([...eventos, nuevoEvento]);
    };

    return (
        <div className='contenedor'>
            <h1>Lista de Eventos</h1>
            <FormularioEvento Agregar={agregarEvento} />
        <div className="lista-eventos">
            {eventos.map((evento, index) => (
            <input
                key={index}
                type="text"
                value={evento.titulo}
                readOnly // Hace que el input no sea editable
            />
        ))}
        </div>
        <ListaProductos />
    </div>
);
}



export default App;
