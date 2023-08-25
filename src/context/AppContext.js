import { createContext, useContext, useState } from 'react';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const url = "https://playground.4geeks.com/apis/fake/contact/"
    const [contactList, setContactList] = useState([]);


    const getContacts = async () => {
        try {
            const request = await fetch(`${url}agenda/Alvaro`);
            const response = await request.json();
            console.log(response);
            setContactList(response);
        } catch (error) {
            console.error(error);
        }
    }


    const addContact = async (contact) => {
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            });
            if (request.ok) {
            const response = await request.json();
            console.log(response);
            getContacts();
            }
            else{
                console.log("No se pudo agregar el contacto");
            }
            
        } catch (error) {
            console.error(error);
        }
    }

    const deleteContact = async (id) => {
        try {
            const request = await fetch(`${url}${id}`, {
                method: 'DELETE',
            });
            if (request.ok) {
            const response = await request.json();
            console.log(response)
            getContacts();
            }
            else{
                console.log("No se pudo eliminar el contacto");
            }
        } catch (error) {
            console.error(error);
        }
    }


    const editContact = async (id, updatedContact) => {
        try {
            const request = await fetch(`${url}${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedContact),
            });
            
            if (request.ok) {
                const response = await request.json();
                console.log(response);
                getContacts();
            }
            else{
                console.log("No se pudo editar el contacto");
            }
        }
        catch (error) {
            console.error(error);
        }
    }


    const store = {
        contactList,
    }


    const actions = {
        getContacts,
        addContact,
        deleteContact,
        editContact,
    }
    return (<AppContext.Provider value={{ store, actions }}>
        {children}
    </AppContext.Provider>);
}


const useAppContext = () => useContext(AppContext);


export default useAppContext;