import { useState } from 'react';
import './App.css';
import List from './components/List';
import Button from './components/Button';
import ButtonAlert from './components/ButtonAlert';

function App() {
  let listNames = [
    'Jeremy Saulnier',
    'Ari Aster',
    'Christopher Nolan',
    'Quentin Tarantino',
    'David Fincher',
  ];

  const handleSelectItem = (listItem: number, listName: string) => {
    console.log(listName);
  };

  const [alertState, setalertState] = useState(false);

  return (
    <div>
      <List
        list={listNames}
        heading="Top 5 Directors"
        onSelectItem={handleSelectItem}
      />
      {alertState && (
        <ButtonAlert onCloseHandle={() => setalertState(false)}>
          <strong>Holy Gabron!</strong> You should have not clicked the button
          below.
        </ButtonAlert>
      )}

      <Button
        onClickHandler={() => {
          setalertState(true);
        }}
        color="primary"
      >
        Like
      </Button>
    </div>
  );
}

export default App;
