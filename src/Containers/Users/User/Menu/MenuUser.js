import React from 'react';
import Drop from '../../../../Components/Dropdown/Drop';
import './MenuUser.css';


class MenuUser extends React.Component{
    render(){
        return(
            <div>
                <div class="box">
                <div className="dropdown">
                    <Drop
                    />
                </div>
            </div>
            </div>
        )
    }
}

export default MenuUser;