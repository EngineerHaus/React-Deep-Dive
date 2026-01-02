import React from 'react';

import MyComponent4 from '../useState/MyComponent4';
import Form from '../useState/Form';
import { clearState } from './myUseState';

const App = () => {
  const [view, setView] = React.useState('v4');

  const handleViewChange = (newView) => {
    clearState();
    setView(newView);
  };

  return (
    <div>
      <nav style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => handleViewChange('v4')}>useState v3</button>
        <button onClick={() => handleViewChange('v5')}>useState v4</button>
      </nav>

      <hr />

      {view === 'v4' && <MyComponent4 />}
      {view === 'v5' && <Form />}
    </div>
  );
};

export default App;
