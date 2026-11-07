import { getUser } from "@/helper/GetUser.js";
/*
*return selected image

*/

export function UploadImage(e, element) {
  const selectedImage = e.target.files[0]
  //  image tag
  const output = document.getElementById(element)

  output.src = URL.createObjectURL(selectedImage)

  output.onload = function () {
    URL.revokeObjectURL(output.src)
  }

  return selectedImage
}

export function prepareImgHeader(file) {
  const header=new Headers();
  const connectedUser=getUser()
  header.append("Accept", 'application/json')
  header.append(  "Authorization", 'Bearer ' + connectedUser?.token)
  const ins=new FormData();
  ins.append("image",file)
const requiredOptions={
  method:"POST",
  headers:header,
  body:ins
}
return requiredOptions

}