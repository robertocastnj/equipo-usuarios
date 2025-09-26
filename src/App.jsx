import React, { useState, useEffect } from 'react'
import Contacts from './contacts'

export default function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/usuarios.json')
        if (!response.ok) {
          throw new Error('Error al cargar contactos')
        }
        const data = await response.json()
        setContacts(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchContacts()
  }, [])

  const handleDelete = (indexToDelete) => {
    const updatedContacts = [...contacts]
    updatedContacts.splice(indexToDelete, 1)
    setContacts(updatedContacts)
  }

  return (
    <div className="container">
      <h1>Lista de Contactos</h1>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <Contacts
            key={index}
            index={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button id="addContactBtn" className="addContactBtn">
        +
      </button>
    </div>
  )
}
