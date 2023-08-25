import FormUser from "../../components/FormUser/FormUser"
import {Link} from "react-router-dom"
export default function AddNewUser() {
  return (
    <div className="container w-75">
    <h1 className="mb-4">Agregar nuevo usuario</h1>
    <FormUser method="Creado" id= "0" />
    <Link to="/">Volver a contactos</Link>
    </div>
  )
}
