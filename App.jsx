import React from 'react';
import { createRoot } from 'react-dom/client';

import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';

const App = () => {
  const [view, setView] = React.useState('v1');

  return (
    <div>
      <nav style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setView('v1')}>handleClick</button>
        <button onClick={() => setView('v2')}>useState v1</button>
        <button onClick={() => setView('v3')}>useState v2</button>
        <button onClick={() => setView('v4')}>useState v3</button>
      </nav>

      <hr />

      {view === 'v1' && <MyComponent1 />}
      {view === 'v2' && <MyComponent2 />}
      {view === 'v3' && <MyComponent3 />}
      {view === 'v4' && <MyComponent4 />}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
