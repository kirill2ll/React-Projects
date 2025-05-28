import { useState } from 'react';
import Player from './components/Player.jsx';

function App() {
  const [userName, setUserName] = useState(null);
  return (
    <>
      <Player userName={userName} setUserName={setUserName} />
      <div id="challenges"></div>
    </>
  );
}

export default App;
