import { useEffect, useState } from 'react';

import "./Home.scss"

import Fader from '../../components/Fade';
import IntroTimer from '../../components/BannerIntro';
import Fade from '../../components/Fade';


export default function Home() {

    // Event-Y State, init value 0;
    const[offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        // Function callback to remove event listener when component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // Some HTML Contents
    const content = () => (
        <div className='Some_Stuff'>
          <h1>Hello! This is a test</h1>
          <p>Here is some cool text</p>
        </div>
      );


    return (
     <>
     <div className='Hero_Banner_Container'>
        <div className='Hero_Banner'>
          <IntroTimer time={10000} />
          <div className='Hero_Banner_Text'>
            <Fader text="Welcome" time={2000} type='h1'/>
            <Fader text="I am glad you are here" time={5000} type='p'/>
          </div>
          <Fade time={7000} type='img' />
        </div>
      </div>
      
      {/* <ImageOne /> */}

      <div className='Test-Parallax'>
        <div 
        className='Parallax-Background'
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}/>

        <div 
        className='Parallax-Background-2'
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}/>

        <div 
        className='Parallax-Background-Middle'
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}/>

        <div 
        className='Parallax-Background-Middle-2'
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}/>

        <div 
        className='Parallax-Background-Middle-3'
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}/>

        <div className='Parallax-Background-Content'>{content()}</div>

      </div>

      <div className='stuff_1'>
        <h1>Here is some extra text to go along with the Parallax</h1>
        <h1>Here is some extra text to go along with the Parallax</h1>
        <h1>Here is some extra text to go along with the Parallax</h1>
      </div>



      {/* <ImageOne /> */}
    </>
    );
};