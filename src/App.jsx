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
        console.log(contacts)
      } catch (error) {
        console.error(error)
      }
    }

    fetchContacts()
  }, [])

  return (
    <div class="container">
      <h1>Lista de Contactos</h1>
      <ul class="contact-list">
        <Contacts />
        <Contacts />
      </ul>
      <button id="addContactBtn" class="addContactBtn">
        +
      </button>
    </div>
  )
}
