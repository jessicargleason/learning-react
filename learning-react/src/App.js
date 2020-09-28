import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

function Example() {
  //new state variable (count) and function that counts it (setCount) and start with zero
  const [count, setCount] = useState(0);

    //Use effect lets us deal with "side effects" of this function
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount( count + 1 )}>
          Click me
        </button>
      </div>
    );
}

const App = ({lakes}) => (
  <Example />
)

export default App;
