import React from 'react';

export default props => {
    console.log(props)
    
    const { src } = props.about
    
    return <img className="scrapbook-image" src={src}/>
}