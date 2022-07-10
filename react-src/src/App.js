import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  // Initial offset 0
  const[offsetY, setOffsetY] = useState(0);
  const handleScroll = ()=> {
    setOffsetY(window.pageYOffset);
  }

  useEffect( ()=> {
    window.addEventListener('scroll', handleScroll);

    // Function callback to remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const content = () => {
    <div className='Some_Stuff'>
      <h1>Hello! This is a test</h1>
      <p>Here is some cool text</p>
    </div>
  };

  return (
    <>
      <div className='Test-Parallax'>
        <div className='Parallax-Background'></div>
        <div className='Parallax-Background-Middle'></div>
        <div className='Parallax-Background-Content'>{content()}</div>
      </div>
    </>
  );
}

export default App;
