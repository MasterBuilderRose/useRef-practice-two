import React, {useState, useRef, useEffect} from 'react'

function SavingPrevSeven() {
  const [name, setName] =useState("");
  const prevNameRef = useRef("");

  useEffect(() => {
    prevNameRef.current = name
  }, [name]);
  return (
    <div>
      <h1>Previous Name Tracker</h1>
      <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text" />
      <p>
        <strong>Current name:</strong> {name}
      </p>
      <p>
        <strong>Previous name:</strong> {prevNameRef.current}
      </p>
    </div>
  );
}

export default SavingPrevSeven