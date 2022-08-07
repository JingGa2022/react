import './App.css';
import Say from './Say';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';
import Counter from './Counter';
import Info from './info';
import { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Say />
      <EventPractice />
      <IterationSample />
      <Info />
      <button onClick={() => {
        setVisible(!visible);
      }}>{visible ? 'hide' : 'show'}</button>
      <br />
      {visible && <Info />}


      <Counter />

    </>
  );
}

export default App;
