import React from 'react';
import './Dash.css';

import Drop from '../../Components/Dropdown/Drop'

class Dash extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            message: 'There are currently no results to show!'
        }
    }
    render(){
        return(
            <div>
                
                <div class="jumbotron">
                <div style={{ position: 'absolute'}}>
                    <Drop
                    items={[
                    {value: 'United States', id: 1},
                    {value: 'Mexico', id: 2},
                    {value: 'UK', id: 3},
                    ]}
                    />
                </div>
               
            <div class="box">
            </div>

            </div>
            </div>
            
        )
    }
}

export default Dash;