import { useState, useEffect } from "react";
import useAppContext from "../../context/AppContext";
import FormUser from "../FormUser/FormUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPen,faLocationDot,faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function ListUser() {
    const { store, actions } = useAppContext();
    const { getContacts, deleteContact } = actions;
    const { contactList } = store;

    useEffect(() => {
        const obtenerContactos = async () => {
            await getContacts();
        };
        obtenerContactos();
    }, []);

    return (
        <>
            <ul className="list-group">
                {contactList.map((contact) => {
                    // Genera un id único para el modal basado en el contact.id
                    const modalId = `exampleModal-${contact.id}`;

                    return (
                        <div className= "container-fluid w-75" key={contact.id}>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className="rounded-circle m-2 p-4" src="https://picsum.photos/200/200" alt="" />
                                    </div>
                                    <div className="col-6 p-4">
                                        <h3 className="mb-4">{contact.full_name}</h3>
                                        <p className="text-secondary fs-4 text mb-0"><FontAwesomeIcon icon={faLocationDot} />     {contact.address}</p>
                                        <p className="text-secondary fs-4 text mb-0"><FontAwesomeIcon icon={faPhone}rotation={270}/>  {contact.phone}</p>
                                        <p className="text-secondary fs-4 text">     <FontAwesomeIcon icon={faEnvelope} />  {contact.email}</p>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center align-items-center gap-4 ">
                                         <FontAwesomeIcon icon= {faPen} style={{ color: "#000000" }} data-bs-toggle="modal" data-bs-target={`#${modalId}`}  size="2xl"/>
                                         <FontAwesomeIcon icon={faTrash} style={{ color: "#000000" }} onClick={() => deleteContact(contact.id)}size="2xl"/>
                                         
                                           </div>
                                </div>
                            </li>
                            <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <FormUser method="Editado" id={contact.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}
