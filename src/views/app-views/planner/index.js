import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { saveAs } from 'file-saver';
import ObjectList from './objects';
import Board from './board';

const Planner = () => {
  const objects = [
    { id: 1, name: 'Table1', image: 'data:image/png;base64,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' },
    { id: 2, name: 'Table2', image: 'data:image/png;base64,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' },
    { id: 3, name: 'Table3', image: 'data:image/png;base64,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' },

  ];

  const [placedObjects, setPlacedObjects] = useState([]);
  
  const handleSave = () => {
    const data = JSON.stringify(placedObjects);
    const blob = new Blob([data], { type: 'application/json' });
    saveAs(blob, 'arrangement.json');
  };
  
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const importedData = JSON.parse(event.target.result);
  
        setPlacedObjects(importedData);
      };
      reader.readAsText(file);
    }
  };
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <ObjectList objects={objects} />
        <Board placedObjects={placedObjects} setObjects={setPlacedObjects} />
      </div>
      <button onClick={handleSave} style={{ marginTop: '20px' }}>
        Save Arrangement
      </button>
      <input
        type="file"
        onChange={handleImport}
        style={{ marginTop: '20px', display: 'block' }}
      />
    </DndProvider>
  );
  
};

export default Planner;
