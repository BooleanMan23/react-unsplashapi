import React from 'react';
import SearchBar from './SearchBar';
import Container from './Container';
import ImageList from './ImageList';
import Excercise from './Excercise';
const images = ['cars1.jpg', 'cars2.jpg', 'cars3.jpg', 'cars4.jpg', 'cars1.jpg'];

class App extends React.Component{
    onSearchSubmit(term){
        console.log(`On search submit : ${term}`);
    }
    render(){
        return (
            // <Excercise/>
            <Container marginTop = "mt-5">
                  <SearchBar placeholder = "Image Keyword" onSubmit={this.onSearchSubmit}/>
                  <ImageList images = {images} />
            </Container>
        );
    }
}

export default App;