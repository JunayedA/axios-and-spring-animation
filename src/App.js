import logo from './logo.svg';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
  return (
    <div className="App">
      <animated.div style={useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })}>I am some text</animated.div>
    </div>
  );
}

export default App;
