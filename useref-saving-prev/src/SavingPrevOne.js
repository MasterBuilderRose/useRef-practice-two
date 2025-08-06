import React, { useState, useRef, useEffect } from 'react';

function SavingPrevOne() {
  const [name, setName] = useState("");
  const prevNameRef = useRef("");

  // Save the previous name every time 'name' changes
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Previous Name Tracker</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a name"
        style={{ padding: "8px", fontSize: "16px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Current name:</strong> {name}
        </p>
        <p>
          <strong>Previous name:</strong> {prevNameRef.current}
        </p>
      </div>
    </div>
  );
}

export default SavingPrevOne;