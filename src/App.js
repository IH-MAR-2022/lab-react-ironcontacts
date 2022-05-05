import React from "react";
import "./App.css";
import contactsJson from "./contacts.json";

let firstFive = contactsJson.slice(0, 5);
let theRest = contactsJson.slice(5);

function App() {
  const [contacts, setContacts] = React.useState(firstFive);
  const [remainingCelebs, setRemainingCelebs] = React.useState(theRest);

  function addContact() {
    if (remainingCelebs.length > 0) {
      let randomNum = Math.floor(Math.random() * remainingCelebs.length);
      //This pulls a random celebrity from remainingCelebs
      let randomCeleb = remainingCelebs[randomNum];

      //add a new celeb to our contacts list
      setContacts(contacts.concat(randomCeleb));

      //remove that celebrity from the non-used array
      let filteredArr = remainingCelebs.filter((celeb) => {
        return celeb.id !== randomCeleb.id;
      });

      //set the remaining celebs
      setRemainingCelebs(filteredArr);
    }
  }

  return (
    <div>
      <button onClick={addContact}>Add Random Contact</button>
      <table>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} height="50" width="40" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
