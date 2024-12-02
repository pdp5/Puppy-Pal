import Puppy from "./Puppy";
import "./App.css";
import { useState } from "react";
import { puppyList } from "./data";
function App() {
  const [selectDog, setSelectDog] = useState(null);

  function handleClick(dog) {
    setSelectDog(dog);
  }
  return (
    <>
      {selectDog && (
        <div className="dog-info">
          <h2>Dog Information:</h2>
          <p>
            <strong>ID:</strong> {selectDog.id}
          </p>
          <p>
            <strong>Name:</strong> {selectDog.name}
          </p>
          <p>
            <strong>Email:</strong> {selectDog.email}
          </p>
          {selectDog.isCute && <p>{selectDog.name} is Cute!</p>}
          <p>
            <strong>Age:</strong> {selectDog.age}
          </p>
          <p>
            <strong>Owner ID: </strong> {selectDog.ownerId}
          </p>
          {selectDog.tricks.length > 0 && (
            <p>
              <strong>Tricks: </strong>{" "}
              {selectDog.tricks.map((trick) => (
                <ul key={trick.id}>
                  <li>
                    <strong>ID: </strong>
                    {trick.id}
                  </li>
                  <li>
                    <strong>Title: </strong>
                    {trick.title}
                  </li>
                </ul>
              ))}
            </p>
          )}
        </div>
      )}
      <h1 className="headiing">Dog List</h1>
      {puppyList.map((dog, index) => (
        <Puppy
          key={index}
          name={dog.name}
          onClick={() => handleClick(dog)}
          selected={selectDog?.id === dog.id}
        />
      ))}
    </>
  );
}

export default App;
