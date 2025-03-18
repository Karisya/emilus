import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { saveAs } from 'file-saver';
import ObjectList from './objects';
import Board from './board';

const App = () => {
  const objects = [
    { id: 1, name: 'Table', image: '' },
    { id: 2, name: 'Chair', image: '' },
    { id: 3, name: 'Partition', image: '' },
  ];

  const [selectedObject, setSelectedObject] = useState(null);
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
        <Board setObjects={setPlacedObjects} />
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

export default App;
