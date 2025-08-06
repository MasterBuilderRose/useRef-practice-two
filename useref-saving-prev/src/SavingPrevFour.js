import React, { useState, useRef, useEffect} from "react";

function SavingPrevFour() {
  const [name, setName] =useState("");
  const prevNameRef =useRef("");

  useEffect(() => {
    prevNameRef.current = name
  }, [name])

  return (
    <div>
      <h1>Previous Name Tracker</h1>
      <input 
      type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      
      <p>
         <strong>Current name:</strong> {name}
      </p>
      <p>
        <strong> Previous name:</strong> {prevNameRef.current}
      </p>
    </div>
  );
}

export default SavingPrevFour;
