import { useState } from "react"
import useAppContext from '../../context/AppContext'

export default function FormUser({ method,id }) {
    const { store, actions } = useAppContext();
    const { addContact, editContact } = actions;
    const { contactList } = store;
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const NAMEAGENDA = 'Alvaro'


    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        const contact = {
            "full_name": name,
            "email": email,
            "agenda_slug": NAMEAGENDA,
            "address": address,
            "phone": phone
        }
        if (method === 'Creado') {
            addContact(contact);
            setName('');
            setPhone('');
            setEmail('');
            setAddress('');
        } else {
            editContact(id,contact);
            setName('');
            setPhone('');
            setEmail('');
            setAddress('');
        }

        alert(`Contacto ${method} con éxito`);

    }



    return (
        <form onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input id= "name" type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" value={name} onChange={handleNameChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input id= "email" type="email" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="basic-addon2" value={email} onChange={handleEmailChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="number" className="form-label">Phone</label>
                <input id="number" type="Number" className="form-control" placeholder="Enter phone" aria-label="Amount (to the nearest dollar)" value={phone} onChange={handlePhoneChange} />
            </div>


            <div className="mb-3">
                <label htmlFor= "address" className="form-label">Address</label>
                <input id="address" type="text" className="form-control" placeholder="Enter Address" aria-label="Amount (to the nearest dollar)" value={address} onChange={handleAddressChange} />
            </div>

            <button type="submit" className="btn btn-primary w-100"  {...(method !== "Creado" ? { "data-bs-dismiss": "modal" } : {})}>{method}</button>
        </form>
    )
}