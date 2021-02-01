import React from 'react';

const Container = (props) => {
  
    return (
        <div className={`container ${ props.marginTop }`}>
            <div className = "content">{props.children}</div>
        </div>
    );
}

export default Container;