import Swal from 'sweetalert2'

export const alertGeneral = (title='', text='', icon='', ) => {
    Swal.fire({
        title,
        text,
        icon,
        showConfirmButton: false,
        timer: 1500,
    })
}