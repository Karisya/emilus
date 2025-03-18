import React, { useState, useEffect } from 'react';
import { useDrop, useDrag } from 'react-dnd';

const Board = ({ placedObjects, setObjects }) => {
  const [boardObjects, setBoardObjects] = useState([]);

  useEffect(() => {
    setBoardObjects(placedObjects);
  }, [placedObjects]);

  const [{ isOver }, drop] = useDrop({
    accept: 'object',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const boardX = offset.x - 500; 
      const boardY = offset.y - 100;

      const existingObjectIndex = boardObjects.findIndex(
        (obj) => obj.id === item.id
      );

      if (existingObjectIndex !== -1) {
        const updatedObjects = [...boardObjects];
        updatedObjects[existingObjectIndex] = {
          ...updatedObjects[existingObjectIndex],
          x: boardX,
          y: boardY,
        };
        setBoardObjects(updatedObjects);
        setObjects(updatedObjects);
      } else {
        const newObject = {
          ...item,
          id: `${item.id}-${new Date().getTime()}`,
          x: boardX,
          y: boardY,
        };
        const updatedObjects = [...boardObjects, newObject];
        setBoardObjects(updatedObjects);
        setObjects(updatedObjects);
      }
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
        backgroundColor: isOver ? 'lightgreen' : 'black',
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
    item: { id: obj.id, x: obj.x, y: obj.y }, 
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
        }}
      />
    </div>
  );
};

export default Board;
