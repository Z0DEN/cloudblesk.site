const GP_pic = "https://chakiris.club/uploads/posts/2023-01/1674776913_chakiris-club-p-litso-garri-pottera-krasivo-1.jpg"
const RH_pic = "https://tviv.ru/wp-content/uploads/2018/07/Silicon-Valley.jpg"
const LS_pic = "https://static.wikia.nocookie.net/rustarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20061127144734"
const EA_pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJxLGiCL9VPw5h_2CU2vPSHVUA4E69uoj3uPuCnhM&s"


async function createImage(data) {
  const response = await fetch("https://api.bannerbear.com/v2/images", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer bb_pr_300863cdb41972442ead0d0633c998`,
    },
  });
  const responseData = await response.json();
  return responseData.uid;
}

async function getImageUrl(imageUid) {
  const url = `https://api.bannerbear.com/v2/images/${imageUid}`;

  while (true) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer bb_pr_300863cdb41972442ead0d0633c998`,
      },
    });

    const responseData = await response.json();
    console.log(response.json());
    if (responseData.status === "completed") {
      console.log(responseData.image_url);
      return responseData.image_url;
    }
    console.log("fail get image url");
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

async function handleSubmit() {
  event.preventDefault();
  const character = document.getElementById("character").value;
  const name = document.getElementById("character").value;
  const city = document.getElementById("character").value;
  const data =
    {
      "project_id": "nrNAyVz3RY31bY9dE8",
      "template": "4KnlWBbK10p45OQGgm",
      "modifications": [
        {
          "name": "face",
          "image_url": character === "GP" ? `${GP_pic}` : character === "RH" ? `${RH_pic}` : character === "LS" ? `${LS_pic}`: character === "EA" ? `${EA_pic}`: ``,
        },
        {
          "name": "character_message",
          "text": "Your favorite message is",
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
          "text": `${name}`,
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
  console.log(imageUid);
  const imageUrl = await getImageUrl(imageUid);

  const img = document.createElement("img");
  img.src = imageUrl;
  console.log(img);
  console.log(img.src);
  const imageContainer = document.querySelector(".image-container");
  imageContainer.appendChild(img);
}
