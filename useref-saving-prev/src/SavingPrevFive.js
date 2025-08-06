import React, {useState, useRef, useEffect} from 'react'

function SavingPrevFive() {
  const [name, setName] = useState("");
  const prevNameRef = useRef("");

  useEffect(() => {
    prevNameRef.current = name
  }, [name])

  return (
    <div>
      <h1>Previous Name Tracker</h1>
      <input 
      value={name}
      placeholder='Type a Name'
      onChange={(e) => setName(e.target.value)}
      />
      <p> <strong>Current Name:</strong>
      {name}</p>
      <p><strong>Previous name:</strong>
      {prevNameRef.current}</p>
    </div>
  );
}

export default SavingPrevFive