import React from 'react';

 const renderImages = (images) =>{
    const imageRowElement = [];
    for(const image of images){
        imageRowElement.push( <img  className="col-lg-4 col-md-6 col-sm-12 mt-3" src={image} alt=""/>);
    }
    return imageRowElement;
}

const ImageList = (props) => {
    return (
         <div className="row">
            {renderImages(props.images)}
        </div>
    );
}

export default ImageList;