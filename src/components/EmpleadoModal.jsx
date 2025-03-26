import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Entrada from './Entrada.jsx';

const EmpleadoModal = ({ modalTitle, modalOpen, setModalOpen, empleado, handleInputChange, handleSubmit }) => {
    return (
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Entrada label="Nombre" name="nombre" value={empleado.nombre} onChange={handleInputChange} />
                <Entrada label="DNI" name="dni" value={empleado.dni} onChange={handleInputChange} />
                <Entrada label="Dirección" name="direccion" value={empleado.direccion} onChange={handleInputChange} />
                <Entrada label="Email" name="email" value={empleado.email} onChange={handleInputChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EmpleadoModal;