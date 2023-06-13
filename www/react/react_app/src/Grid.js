const Grid = ({ height, width, Obj, GridSize, ImgSize, isChecked, delay}) => {
  const colors = Object.values(Obj);

  return (
    <div
      className="GRID"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width}, ${GridSize}px)`,
        gridTemplateRows: `repeat(${height}, ${GridSize}px)`,
      }}
    >
      {colors.map((color, index) => (
   <span
     key={index}
     style={{
       backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
       width: `${ImgSize}px`,
       height: `${ImgSize}px`,
       animationDelay: `${index * delay}s`,
     }}
     onAnimationEnd={() => {
       // удаление класса анимации после окончания анимации
       const element = document.getElementById(`grid-span-${index}`);
       element.classList.remove("grid-span-animation");
     }}
     id={`grid-span-${index}`} // уникальный идентификатор для каждого спана
     className={(isChecked ? ("GridSpan grid-span-animation") : ("GridSpan"))}  // добавление класса анимации
   ></span>
 ))}
    </div>
  );
};

export default Grid;
