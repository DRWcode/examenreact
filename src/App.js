import React from 'react';
import useEmpleados from './hooks/useEmpleados';
import EmpleadoLista from './components/EmpleadoLista.jsx';
import EmpleadoModal from './components/EmpleadoModal.jsx';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
    const { empleados, empleado, modalTitle, modalOpen, handleInputChange, openModal, handleSubmit, setModalOpen } = useEmpleados();

    return (
        <div className="container mt-5">
            <Button variant="primary" className="mb-3" onClick={() => openModal('create')}>Crear Empleado</Button>
            <EmpleadoLista empleados={empleados} openModal={openModal} />
            <EmpleadoModal modalTitle={modalTitle} modalOpen={modalOpen} setModalOpen={setModalOpen} empleado={empleado} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
    );
}

export default App;