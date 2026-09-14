import Swal from "sweetalert2"

export class Alerts {
    static success(text: string) {
        Swal.fire({
            title:'Success',
            text,
            icon: 'success'
        });
    }
}