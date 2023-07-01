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
  const TBL_pic = "https://avatars.dzeninfra.ru/get-zen_doc/1612125/pub_5fbf956a4b9b1b331de71378_5fbf9574d81aaf181b98ca7e/scale_1200"
  const EA_pic = "https://i1.sndcdn.com/avatars-000239937625-wn66b5-t500x500.jpg"

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
    document.getElementById("loadingIndicator").style.opacity = "100%"
    document.getElementById("image-container").style.zIndex = "99"
    const data = {
      "template": "4KnlWBbK10p45OQGgm",
      "project_id": "vWnx7pMbLRkzJGLVmE",
      "modifications": [
        {
          "name": "face",
          "image_url": character === "Harry Potter" ? `${GP_pic}` : character === "Richard Hendricks" ? `${RH_pic}` : character === "Tim Berners-Lee" ? `${TBL_pic}`: character === "Elliot Alderson" ? `${EA_pic}`: ``,
        },
        {
          "name": "character_message",
          "text": "Your favorite character is ",
          "color": null,
          "background": null
        },
        {
          "name": "from",
          "text": "from:",
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
    document.getElementById("loadingIndicator").style.opacity = "0%"
    setInterval(() => {
      window.location.reload();
    }, 30000);
  }
   
  const handleCancel = () => {
    setShowForm(false);
  };
  
  return (
    <div>
    <div id="image-container">
        <span id="loadingIndicator"></span>
        {imageUrl && <img src={imageUrl} alt="" />}
    </div>
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
            <label>Кого из персонажей ты бы выбрал:</label>
            <select
              className="form-control"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            >
              <option value="">Выберите персонажа</option>
              <option value="Harry Potter">Гарри Поттер</option>
              <option value="Richard Hendricks">Ричард Хендрикс</option>
              <option value="Tim Berners-Lee">Тим Бернерс Ли</option>
              <option value="Elliot Alderson">Эллиот Алдерсон</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
          <button
            type="button"
            className="btn btn-secondary cancel"
            onClick={handleCancel}
          >
            Отмена
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export { Form };
