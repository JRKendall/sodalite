import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal'
import Buttom from 'react-bootstrap/Button'
import './Drop.css'

import { Route , withRouter} from 'react-router-dom';

import StoreMenu from '../../Containers/Users/Store/Menu/MenuStore';
import MenuStore from '../../Containers/Users/Store/Menu/MenuStore';
class Drop extends React.Component{
state = {value: "Please Choose..", flag: false, results: 'No results to show'};

handleChange(e) {
  this.setState({value: e.target.value});
}

handleSubmit(event) {
  alert('Your planagrom is for store: ' + this.state.value);
  event.preventDefault();
}

  render(){

    if(this.state.value == "Please Choose.."){
    return(
      <div className="container-fluid" style={{margin: 0}}>
      

<form style={{alignSelf:'stretch',}}onSubmit={() => this.handleSubmit()}>
        <label className="text-white text-center">
          Pick from your stores: <br/> <br/>
          <select value={this.state.value} onChange={(e) => this.handleChange(e)} style={{marginTop: 20, width: 400, margin: 0, }}>
          <option value="Please Choose..">Please Choose..</option>
            <option value="Luton">Luton</option>
            <option value="Dunstable">Dunstable</option>
            <option value="Bedford">Bedford</option>
            <option value="London">London</option>
            <option value="001">001</option>
          </select>
        </label>
      </form>
        
      </div>
    )
  } else if(this.state.value == 'Luton'){
    return(
      <div className="container-fluid" style={{margin: 0}}>
        <p className="text-white"> Luton </p>
        <div className="results" style={{width: 700, height: 400,}}>
          <h1>{this.state.results}</h1>
        </div>
        <div style={{flexDirection: 'row', display: 'flex',}}>
        <button className="btn btn-accent text-white" onClick={() => this.setState({ results: 'Please call us on 01582767676'})}> Flag </button>
        
        <button className="btn btn-accent text-white" onClick={() => this.setState({value: 'Please Choose..', results: 'No results to show'})}> Back </button>
        
        </div>
      </div>
    )
  }
    else if(this.state.value == 'Bedford'){
      return(
        <div className="container-fluid" style={{margin: 0}}>
        <p className="text-white"> Bedford </p>
        <div className="results" style={{width: 700, height: 400,}}>
          <h1>{this.state.results}</h1>
        </div>
        <div style={{flexDirection: 'row', display: 'flex',}}>
        <button className="btn btn-accent text-white" onClick={() => this.setState({ results: 'Please call us on 01582767676'})}> Flag </button>
        
        <button className="btn btn-accent text-white" onClick={() => this.setState({value: 'Please Choose..', results: 'No results to show'})}> Back </button>
        
        </div>
      </div>
      )
  

  } else if(this.state.value == 'Dunstable'){
    return(
      <div className="container-fluid" style={{margin: 0}}>
        <p className="text-white"> Dunstable </p>
        <div className="results" style={{width: 700, height: 400,}}>
          <h1>{this.state.results}</h1>
        </div>
        <div style={{flexDirection: 'row', display: 'flex',}}>
        <button className="btn btn-accent text-white" onClick={() => this.setState({ results: 'Please call us on 01582767676'})}> Flag </button>
        
        <button className="btn btn-accent text-white" onClick={() => this.setState({value: 'Please Choose..', results: 'No results to show'})}> Back </button>
        
        </div>
      </div>
    )

  } else if(this.state.value == 'London'){
    return(
      <div className="container-fluid" style={{margin: 0}}>
      <p className="text-white"> London </p>
      <div className="results" style={{width: 700, height: 400,}}>
        <h1>{this.state.results}</h1>
      </div>
      <div style={{flexDirection: 'row', display: 'flex',}}>
      <button className="btn btn-accent text-white" onClick={() => this.setState({ results: 'Please call us on 01582767676'})}> Flag </button>
      
      <button className="btn btn-accent text-white" onClick={() => this.setState({value: 'Please Choose..', results: 'No results to show'})}> Back </button>
      
      </div>
    </div>
    )
  } else if (this.state.value == '001'){
    return(
    <StoreMenu/>
    )
  }
} 
}

export default withRouter(Drop);