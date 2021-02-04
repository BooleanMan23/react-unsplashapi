import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    onInputChange = (event) =>{
        this.setState({term:event.target.value});
        console.log(this.state.term);
    } 
    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group mb-3"> 
                    <input value = {this.state.term} onChange={this.onInputChange} type="text" className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}


export default SearchBar;