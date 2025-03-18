import React, { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';

const Board = ({ setObjects }) => {
  const [boardObjects, setBoardObjects] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: 'object',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();

      const boardX = offset.x - 500;  
      const boardY = offset.y-100  ;   

      const newObject = {
        ...item,
        id: `${item.id}-${new Date().getTime()}`,
        x: boardX,  
        y: boardY,  
      };

      setBoardObjects((prev) => [...prev, newObject]);
      setObjects((prev) => [...prev, newObject]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const moveObject = (id, x, y) => {
    const updatedObjects = boardObjects.map((obj) =>
      obj.id === id ? { ...obj, x, y } : obj
    );
    setBoardObjects(updatedObjects);
    setObjects(updatedObjects);
  };

  return (
    <div
      ref={drop}
      style={{
        width: '100%',
        height: '500px',
        border: '2px solid black',
        position: 'relative',
        backgroundColor: isOver ? 'lightgreen' : 'white',
      }}
    >
      {boardObjects.map((obj) => (
        <MovableObject
          key={obj.id}
          obj={obj}
          moveObject={moveObject}
        />
      ))}
    </div>
  );
};

const MovableObject = ({ obj, moveObject }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'object',
    item: obj,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left: obj.x,
        top: obj.y,
        cursor: 'move',
        zIndex: 10,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img
        src={obj.image}
        alt={obj.name}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          cursor: 'move',
        }}
      />
    </div>
  );
};

export default Board;
