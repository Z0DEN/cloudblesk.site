import React from 'react';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <ul style={{ fontFamily: 'Arial', color: 'white', backgroundColor: 'blue' }}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
