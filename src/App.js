import React from 'react';
import SideBySideDiff from './SideBySideDiff';

function App() {
    const oldText = `function example() {
      console.log("hello universe");
      Rakhi
      return true;
      Amit
    }`;

    const newText = `function example() {
      console.log("hello universe");
      Rakhi
      return true;
      Ajit
    }`;

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Side-by-Side Diff Example</h1>
                <SideBySideDiff oldText={oldText} newText={newText} />
            </header>
        </div>
    );
}

export default App;
