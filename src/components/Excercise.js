import React from 'react';

class Excercise extends React.Component{
 

    constructor(props){
        super(props);
        this.state = {password:''};
    }
    
    onInputChange(event){
        this.setState({
            password: "wolo"
          });
    }
    render(){
        return (
            <form>
                <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" value = {this.state.password} onChange={e=>this.setState({password: e.target.value})} />
                {this.state.password.length < 4 ?  <small  class="form-text text-muted">Password must at least 4 characters.</small> : ''}
                </div>
            </form>
        );
    }
}


export default Excercise;