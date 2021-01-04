import React from 'react';
import Image from './Image';
import './listImage.css';


const listImages = ({images}) => {
    const imgURL = images.map(img => {
        return (
            <Image key={img.id} img={img} />
        )
    });
    return (
        <div className="imgContainer">
            {imgURL}
        </div>
    )
}

export default listImages;