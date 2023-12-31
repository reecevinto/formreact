import "./styles.css";
import { useState } from "react";
export default function Form() {
  //let firstName = "";
  const [firstName, setFirstName] = useState("");

  //let lastName = "";
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    //firstName = e.target.value;
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    //lastName = e.target.value;
    setLastName(e.target.value);
  }

  function handleReset() {
    //firstName = "";
    setFirstName("");
    //lastName = "";
    setLastName("");
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />

      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
