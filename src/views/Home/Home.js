import ListUser from "../../components/ListUser/ListUser"
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div className="m-4 w-100">
            <Link to="/AddNewContact">
                <button type="button" className="btn btn-success mb-4"> Add New Contact
                </button></Link>
            <ListUser />
        </div>
    )
}
