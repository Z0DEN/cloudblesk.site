import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  
  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      {!showForm ? (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Показать форму
        </button>
      ) : (
        <form onSubmit="handleSubmit()">
          <div className="form-group">
            <label>Имя:</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Возраст:</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Родной город:</label>
            <select
              className="form-control"
            >
              <option value="">Выберите город</option>
              <option value="Москва">Москва</option>
              <option value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Киев">Киев</option>
            </select>
          </div>
          <div className="form-group">
            <label>Какого из персонажей ты бы выбрал:</label>
            <select
              className="form-control"
            >
              <option value="">Выберите персонажа</option>
              <option value="GP">Гарри Поттер</option>
              <option value="RH">Ричард Хендрикс</option>
              <option value="LS">Люк Скайуокер</option>
              <option value="EA">Эллиот Алдерсон</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Отмена
          </button>
          <img alt="Сгенерированное изображение" />
        </form>
      )}
    </div>
  );
};

export { Form };
