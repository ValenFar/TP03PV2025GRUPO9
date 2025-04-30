import React from 'react';
import productos from './adicionales.js';

const ListaProductos = () => {
    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index} class="producto-item">
                        Producto: {producto.descripcion} - Precio: ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaProductos;