import { useRef } from "react";

export default function Player({ userName, setUserName}) {
  const playerName = useRef();

  return (
    <section id="player">
      <h2>Welcome { userName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={() => setUserName(playerName.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
