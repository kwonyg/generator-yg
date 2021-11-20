import React from 'react';
import Home from '@/components/Home';

function App({ userName, age }: { userName: string; age: number }) {
  return (
    <div>
      <p>{userName}</p>
      <p>{age}</p>
      <Home />
    </div>
  );
}

export default App;
