import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);
  const [gridPixelSize, setGridPixelSize] = useState(4);
  const [imgPixelSize, setImgPixelSize] = useState(4);
  const [gridData, setGridData] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [delayScreenUpdate, setdelayScreenUpdate] = useState(0.05);
  const [isScreenUpdChecked, setIsScreenUpdChecked] = useState(false);

  const handleScreenUpdate = (event) => {
    setdelayScreenUpdate(event.target.value);
  }

  const handleDelayScreenUpdate = (event) => {
    setIsScreenUpdChecked(event.target.checked);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  const handleGridPixelSizeChange = (event) => {
    setGridPixelSize(event.target.value);
  };

  const handleImgPixelSizeChange = (event) => {
    setImgPixelSize(event.target.value);
  };

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
      const reader = new FileReader();
      reader.onload = () => {
        const imagePreview = document.getElementById("image-preview");
        if (imagePreview) {
          imagePreview.src = reader.result;
        }
      };
      reader.readAsDataURL(selectedFile);
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
        setGridData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadButtonClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div>
      <div id="drop-zone" onClick={handleUploadButtonClick}>
      {selectedFile && <img id="image-preview" src="" alt="Preview" />}
        {!selectedFile && <h3>Перетащите изображение сюда или кликните, чтобы выбрать файл</h3>}
        <span>{selectedFile && selectedFile.name}</span>
        <input type="file" id="file-input" accept="image/*" className="inputFile" onChange={handleFileInputChange}></input>
      </div>  
      <button className="sendBtn" onClick={handleSubmit}>Отправить</button>
      <div className="SettingsDiv">
        <span>
          <label htmlFor="grid-pixel-size">Размер пикселя "grid" сетки: {gridPixelSize} </label>
          <input type="range" id="grid-pixel-size" name="grid-pixel-size" min="4" max="50" value={gridPixelSize} onChange={handleGridPixelSizeChange} />
        </span>
        <span>
          <label htmlFor="img-pixel-size">Размер пикселя изображения: {imgPixelSize} </label>
          <input type="range" id="img-pixel-size" name="img-pixel-size" min="4" max={gridPixelSize} value={imgPixelSize} onChange={handleImgPixelSizeChange} />
        </span>
        <span>
          <label htmlFor="ScreenUpdate">Частота обновления: {delayScreenUpdate} </label>
          <input type="range" id="ScreenUpdate" name="ScreenUpdate" min="0.005" max="0.1" step="0.005" value={delayScreenUpdate} onChange={handleScreenUpdate} />
        </span>
        <span>
        <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Лагающее появление???
        </label>
        </span>
        {/* <span>
          <button className="sendBtn" onClick={explode}>Exterminate!!!</button>
        </span> */}
      </div>
      {gridData && <Grid height={imageHeight} width={imageWidth} Obj={gridData} GridSize={gridPixelSize} ImgSize={imgPixelSize} isChecked={isChecked} delay={delayScreenUpdate}/>}
    </div>
  );
}

export { UploadImage };