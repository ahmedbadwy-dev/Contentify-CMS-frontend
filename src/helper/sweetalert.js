import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export function deletePost() {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'Do you sure deleted post',
      theme: 'red',
      icon: 'warning',
      iconColor: 'red',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        resolve('The post deleted successfuly')
      }
    })
  })
}
