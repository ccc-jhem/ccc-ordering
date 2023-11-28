import React from 'react'; 

export default function ApplicationLogo(props) {
    const logoSrc = '/images/logo-1.png';

    

    return (
         <img {...props} src={logoSrc} alt="Logo"/>
    );
}