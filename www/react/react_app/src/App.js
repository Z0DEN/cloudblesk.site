import React from 'react';

const Hero1stTask = () => {
  return (
    <div className="hero">
      <h1>Добро пожаловать в наш магазин</h1>
      <p>Начать покупки!</p>
    </div>
  );
};


const Hero2ndTask = () => {
  return (
    <div className="hero">
      <h1 className="title">Supermarket</h1>
      <p>Start shopping</p>
    </div>
  );
};


const Welcome = ({ name }) => {
  return (
    <h1 className="welcome_h1">Привет, {name}!</h1>
  );
};

const App = () => {
  const [names, setNames] = React.useState([]);

  const handleAddName = () => {
    const newName = prompt('Введите имя:');
    if (newName) {
      setNames([...names, newName]);
    }
  };

  return (
    <>
      <button onClick={handleAddName}>Добавить имя</button>
      {names.map((name, index) => (
        <Welcome key={index} name={name} />
      ))}
    </>
  );
};


export { Hero1stTask, Hero2ndTask, App };
