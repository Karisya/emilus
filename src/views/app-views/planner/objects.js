import React from 'react';
import { useDrag } from 'react-dnd';

const ObjectList = ({ objects }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
      {objects.map((obj) => (
        <DraggableObject key={obj.id} obj={obj} />
      ))}
    </div>
  );
};

const DraggableObject = ({ obj }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'object',
    item: obj,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, marginBottom: '10px', cursor: 'move' }}>
      <img src={obj.image} alt={obj.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
    </div>
  );
};

export default ObjectList;
