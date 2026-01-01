import React from 'react';

import MyComponent4 from '../useState/MyComponent4';
import Form from '../useState/Form';

const App = () => {
  const [view, setView] = React.useState('v4');

  return (
    <div>
      <nav style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setView('v4')}>useState v3</button>
        <button onClick={() => setView('v5')}>useState v4</button>
      </nav>

      <hr />

      {view === 'v4' && <MyComponent4 />}
      {view === 'v5' && <Form />}
    </div>
  );
};

export default App;
