import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
// Importamos el listado completo de contactos desde el archivo JSON
import contactsData from "./contacts.json";

function App() {
  // Estado que almacena los cinco primeros contactos iniciales
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  // Añade un contacto aleatorio que aún no esté en la lista
  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.find((c) => c.id === contact.id)
    );
    if (remainingContacts.length === 0) return;
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts([...contacts, randomContact]);
  };

  // Ordena por nombre alfabéticamente
  const sortByName = () => {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  };

  // Ordena por popularidad de mayor a menor
  const sortByPopularity = () => {
    const sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  };

  // Elimina un contacto por id
  const deleteContact = (id) => {
    const filtered = contacts.filter((contact) => contact.id !== id);
    setContacts(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>IronContacts</h1>

      {/* Botones de acción */}
      <div className="actions">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>

      {/* Tabla de contactos */}
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "" : ""}</td>
              <td>{contact.wonEmmy ? "" : ""}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
