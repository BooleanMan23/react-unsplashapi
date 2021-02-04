import React from 'react';
import SearchBar from './SearchBar';
import Container from './Container';
import ImageList from './ImageList';
import Excercise from './Excercise';
import unsplash from '../api/unsplash';


const testImages = ['cars1.jpg', 'cars2.jpg', 'cars3.jpg', 'cars4.jpg'];
class App extends React.Component{
    state = { images :[] };
     onSearchSubmit  =  async (term) =>{
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
        params : { query: term }
        });
        console.log(response.data.results);
        this.setState({images: response.data.results});
    }
    render(){
        return (
            // <Excercise/>
            <Container marginTop = "mt-5">
                  <SearchBar placeholder = "Image Keyword" onSubmit={this.onSearchSubmit}/>
                  <ImageList images = {testImages} />
                  <h2>{this.state.images.length}</h2>
            </Container>
        );
    }
}

export default App;