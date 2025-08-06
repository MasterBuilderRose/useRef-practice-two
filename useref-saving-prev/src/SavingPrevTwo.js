import React, {useState, useRef, useEffect } from "react";

function SavingPrevTwo() {
  const [name, setName] =useState("");
  const prevNameRef = useRef("");

useEffect(() => {
  prevNameRef.current = name
},[name])


  return (
    <div>
      <h1>Previous Name Tracker</h1>
      <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type a name" />

      <p>
        <strong>Current Name:</strong>
        {name}
      </p>
      <p>
        <strong>Previous Name:</strong> {prevNameRef.current}
      </p>
    </div>
  );
}

export default SavingPrevTwo;
