import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept, index) => {
             return <CoreConcept key={index} {...concept} />
            })}
          </ ul>
        </section>
      </main>
    </div>
  );
}



export default App;
