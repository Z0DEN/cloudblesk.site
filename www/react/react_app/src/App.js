import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);
  const [gridData, setGridData] = useState("gridData"); // новое состояние для данных сетки

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) {
      const img = new Image();
      img.onload = () => {
        setImageWidth(img.width);
        setImageHeight(img.height);
      };
      img.src = URL.createObjectURL(selectedFile);
    }
  }, [selectedFile]);

  const handleSubmit = () => {
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("/api/db/process_image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setGridData(response.data); // сохраняем данные в новом состоянии
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleSubmit}>Отправить</button>
      <Grid height={imageHeight} width={imageWidth} Obj={gridData} />
    </div>
  );
}

export { UploadImage };
