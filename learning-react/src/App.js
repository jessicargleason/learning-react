import React from 'react';
import logo from './logo.svg';

const App = ({lakes}) => (
  <ul>
      {lakes.map((lake) =>
          <li key={lake.id}>{lake.name} | Trailhead: {lake.trailhead}</li>
      )}
  </ul>
)

export default App;
