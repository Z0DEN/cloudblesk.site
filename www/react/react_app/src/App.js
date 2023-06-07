import React, { useState,  useEffect } from 'react';
import axios from 'axios';

function UploadImage(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);

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
    const image = <CreateImage height={imageHeight} width={imageWidth} />;
    props?.CreateImage?.(image);

  //   const formData = new FormData();
  //   formData.append('file', selectedFile);

  //   axios.post('/api/db/process_image', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //   .then(response => {
  //     let JsonObj = JSON.parse(response.data)
  //     const image = <CreateImage height={imageHeight} width={imageWidth} />;
  //     props.CreateImage(image);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // };
  }

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
}

function CreateImage({ height, width }){

    const cellNumbers = Array.from({ length: height * width }, (_, index) => index + 1);

    // Создаем стили для сетки, указываем ширину и высоту каждой ячейки
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(7, 1fr)`,
      gridTemplateRows: `repeat(7, 1fr)`,
      gap: '10px',
      width: '500px',
      height: '500px',
      backgroundColor: '#333',
    };

    return (
      <div style={gridStyle}>
          <span>xui</span>
      </div>
    );
}

// function App() {
//   const [file, setFile] = useState(null);
//   const [pixels, setPixels] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!file) return;
    
//     const formData = new FormData();
//     formData.append('image', file);
    
//     try {
//       const response = await fetch('/api/db/process_image', {
//         method: 'POST',
//         body: formData,
//       });
      
//       const result = await response.json();
//       console.log(result);
      
//       // Обработка полученного JSON объекта
//       const pixelsData = result.pixels;
//       const pixelsArray = Object.keys(pixelsData).map(color => ({ color, count: pixelsData[color] }));
//       setPixels(pixelsArray);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };
  
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Отправить</button>
//       </form>
//       <div className="grid-container">
//         {pixels.map(({ color, count }, index) => (
//           <span key={index} style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`, height: "4px", width: "4px", display: "inline-block" }}>
//             {count}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

export { UploadImage };
