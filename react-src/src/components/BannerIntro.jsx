import React, { useState, useEffect } from 'react'

const BannerIntro = ( {time} ) => {

    useEffect( () => {
        // Add in document default scroll
        document.body.style.overflow = "hidden"

        const lockTimeOut = setInterval( () => {
            document.body.style.overflow = "auto";
        }, time);

    }, [])

    return (
        <>
        </>
    );
}

export default BannerIntro