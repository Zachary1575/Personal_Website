import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import pic from '../assets/images/comp.jpg'

const Fade = ( {text, time, type, } ) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });

    useEffect( () => {

        const timeout = setInterval( () => {
            if (fadeProp.fade === 'fade-out') {
                setFadeProp({ fade: 'fade-in' });
            }
        }, time);

    }, [])

    const fadeContent = () => {
        console.log("The Type is: ", type)

        if (type === 'h1') {
            return <h1 className={fadeProp.fade}>{text}</h1>
        } else if (type === 'p') {
            return <p className={fadeProp.fade}>{text}</p>
        } else if (type === 'img') {
            return <img className={fadeProp.fade} src={pic}></img>
        } 
    }


    return (
        fadeContent()
    )
}

Fade.defaultProps = {
    text: "DEFAULT TEXT",
    time: 2000,
    type: 'h1'
}

Fade.propTypes = {
    text: PropTypes.string,
    time: PropTypes.number
}

export default Fade;