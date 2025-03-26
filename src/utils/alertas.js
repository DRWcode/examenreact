import Swal from 'sweetalert2';

export const showAlert = (message, type) => {
    Swal.fire({
        title: message,
        icon: type,
        confirmButtonText: 'Aceptar',
    });
};