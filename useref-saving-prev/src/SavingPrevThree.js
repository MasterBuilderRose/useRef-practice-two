import React,  {useState, useRef, useEffect} from 'react'

function SavingPrevThree() {
  const [name, setName]=useState("");
  const prevNameRef = useRef("");

  useEffect(() => {
    prevNameRef.current = name
  },[name])
  return (
    <div>
      <h1>Prev Name Tracker</h1>
      <input 
      value={name}
      placeholder="Type a name to save the prev state" 
      onChange={(e) => setName(e.target.value)}
      />
      <p>
        <strong>Current Name:</strong>
        {name}
      </p>
      <p>
        <strong>Previous Name:</strong>
      </p>
    </div>
  );
}

export default SavingPrevThree