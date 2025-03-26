import React from 'react';

const EmpleadoLista = ({ empleados, openModal }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>DNI</th>
                    <th>Dirección</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.dni}</td>
                        <td>{empleado.direccion}</td>
                        <td>{empleado.email}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => openModal('edit', empleado)}>Editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmpleadoLista;