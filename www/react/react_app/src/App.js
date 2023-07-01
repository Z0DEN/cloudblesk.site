import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [character, setCharacter] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const GP_pic = "https://chakiris.club/uploads/posts/2023-01/1674776913_chakiris-club-p-litso-garri-pottera-krasivo-1.jpg"
  const RH_pic = "https://tviv.ru/wp-content/uploads/2018/07/Silicon-Valley.jpg"
  const LS_pic = "https://static.wikia.nocookie.net/rustarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20061127144734"
  const EA_pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJxLGiCL9VPw5h_2CU2vPSHVUA4E69uoj3uPuCnhM&s"

  async function createImage(data) {
    console.log("start create image")
    const response = await fetch('https://api.bannerbear.com/v2/images', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer bb_pr_300863cdb41972442ead0d0633c998`,
      }
    });
    console.log("fetch successfully finished")
    const responseData = await response.json();
    return responseData.uid;
  }
  
  async function getImageUrl(imageUid) {
    console.log(`start get image URL by id : ${imageUid}`)
    const url = `https://api.bannerbear.com/v2/images/${imageUid}`;

    while (true) {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer bb_pr_300863cdb41972442ead0d0633c998`,
        }
      });

      const responseData = await response.json();
      if (responseData.status === 'completed') {
            console.log(`image URL successfuly get: ${responseData.image_url}`)
        return responseData.image_url;
      }
            console.log("waiting for creating image at server")
      await new Promise(resolve => setTimeout(resolve, 10000));
    } 
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      "template": "4KnlWBbK10p45OQGgm",
      "project_id": "vWnx7pMbLRkzJGLVmE",
      "modifications": [
        {
          "name": "face",
          "image_url": character === "Harry Potter" ? `${GP_pic}` : character === "Richard Hendricks" ? `${RH_pic}` : character === "Luke Skywalker" ? `${LS_pic}`: character === "Elliot Alderson" ? `${EA_pic}`: ``,
        },
        {
          "name": "character_message",
          "text": "Your favorite character is ",
          "color": null,
          "background": null
        },
        {
          "name": "from",
          "text": "from",
          "color": null,
          "background": null
        },
        {
          "name": "city",
          "text": `${city}`,
          "color": null,
          "background": null
        },
        {
          "name": "name",
          "text": `${name}, ${age}`,
          "color": null,
          "background": null
        },
        {
          "name": "message",
          "text": "Thanks for registration,",
          "color": null,
          "background": null
        },
        {
          "name": "character",
          "text": `${character}`,
          "color": null,
          "background": null
        }
      ],
      "webhook_url": null,
      "transparent": false,
      "metadata": null
    }
    const imageUid = await createImage(data);
    const imageLink = await getImageUrl(imageUid);
    setImageUrl(imageLink)
  }
   
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Имя:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Возраст:</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Родной город:</label>
            <select
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            >
              <option value="">Выберите персонажа</option>
              <option value="Harry Potter">Гарри Поттер</option>
              <option value="Richard Hendricks">Ричард Хендрикс</option>
              <option value="Luke Skywalker">Люк Скайуокер</option>
              <option value="Elliot Alderson">Эллиот Алдерсон</option>
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
        </form>
      )}
      {imageUrl && <img src={imageUrl} alt="Сгенерированное изображение" />}
    </div>
  );
};

export { Form };
