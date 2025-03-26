import { useState, useEffect } from 'react';
import axios from 'axios';
import { showAlert } from '../utils/alertas';

const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

const useEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [empleado, setEmpleado] = useState({
        nombre: '',
        dni: '',
        direccion: '',
        email: '',
    });
    const [modalTitle, setModalTitle] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingEmpleadoId, setEditingEmpleadoId] = useState(null);

    useEffect(() => {
        getEmpleados();
    }, []);

    const getEmpleados = async () => {
        try {
            const response = await axios.get(API_URL);
            setEmpleados(response.data);
        } catch (error) {
            showAlert('Error al obtener empleados', 'error');
        }
    };

    const openModal = (mode, empleado) => {
        if (mode === 'create') {
            setEmpleado({ nombre: '', dni: '', direccion: '', email: '' });
            setModalTitle('Crear Empleado');
            setEditingEmpleadoId(null);
        } else if (mode === 'edit') {
            setEmpleado(empleado);
            setModalTitle('Editar Empleado');
            setEditingEmpleadoId(empleado.id);
        }
        setModalOpen(true);
    };

    const handleInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Validación de campos vacíos
        if (!empleado.nombre || !empleado.dni || !empleado.direccion || !empleado.email) {
            showAlert('Por favor, complete todos los campos.', 'warning');
            return; // Detiene la ejecución si hay campos vacíos
        }

        try {
            if (editingEmpleadoId) {
                await axios.put(`${API_URL}/${editingEmpleadoId}`, empleado);
                showAlert('Empleado actualizado', 'success');
            } else {
                await axios.post(API_URL, empleado);
                showAlert('Empleado creado', 'success');
            }
            getEmpleados();
            setModalOpen(false);
        } catch (error) {
            showAlert('Error en la operación', 'error');
        }
    };

    return {
        empleados,
        empleado,
        modalTitle,
        modalOpen,
        handleInputChange,
        openModal,
        handleSubmit,
        setModalOpen,
    };
};

export default useEmpleados;