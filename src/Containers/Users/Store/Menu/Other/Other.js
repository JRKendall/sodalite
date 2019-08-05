import React from 'react';
import './Other.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Other extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            name: '',
            loading: true,
        }
    }

    componentDidMount(){
       
        fetch('http://10.242.45.42/costacoffee/src/Server/image.php', {
            headers : { 
                'Accept': 'application/json'
               }
        })
        .then(resp => resp.json())
        .then(res => this.setState({data: res, loading: false,}));

    }
    render(){ 
        console.log(this.state.data);

        if(this.state.loading == true){
            return(
                <div>
            <div className="box">
                <h1> Other </h1>
                <div className="loader">
                <Loader
                type="Puff"
                color="#00BFFF"
                height="100"
                width="300"
                style={{marginTop: 150}}
                />
                <h2 className="text-white">Loading...</h2>
                
                </div>
        </div>
        </div>

            )
        }
        return(
            <div>
            <div className="box">
                <h1> Other </h1>
                <div className="result">
                    <h1>{this.state.data.title}</h1>
                    <img src={this.state.data.url} width='400px' height='400px'/>

                    <h1>{this.state.data.title1}</h1>
                    <img src={this.state.data.url1} width='400px' height='400px'/>

                    <h1>{this.state.data.title2}</h1>
                    <img src={this.state.data.url2} width='400px' height='400px'/>#

                    <h1>{this.state.data.title3}</h1>
                    <img src={this.state.data.url3} width='400px' height='400px'/>
                    
                </div>
        </div>
        </div>
        )
    }
}

export default Other;