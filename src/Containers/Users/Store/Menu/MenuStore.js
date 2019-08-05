import React from 'react';
import Drop from '../../../../Components/Dropdown/Drop';
import './MenuStore.css';
import { Route , withRouter} from 'react-router-dom';

const Images = {
    "images": [
    {
    "title": 1,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 2,
    "url": "https://images.unsplash.com/photo-1564326680392-26c9e5220866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    },
    {
    "title": 3,
    "url": "https://images.unsplash.com/photo-1559163179-3fd017552229?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
    "title": 4,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 5,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 6,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 7,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 8,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 9,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    },
    {
    "title": 10,
    "url": "https://images.unsplash.com/photo-1507396228501-36594df9725d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80"
    }
    ]
};


class MenuStore extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            category: 'None',
            data: [],
            i: 0.
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response =>  response.json())
    .then(resData => {
       //console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
       this.setState({ data: resData }); //this is an asynchronous function
    })
}
    
    data(){
        

    }

      displayImages(){
            return(
                <div>
                    <div className="scroll" style={{flexDirection:'column', display: 'flex',}}>

                    {this.state.data.map(res => {
            return(
                <div>
                    <p>{res.title}</p>
                    <img src={res.thumbnailUrl} width='400px' height='400px'/>
                </div>
            )
        })}

                    </div>
                </div>
      )
    }

    render(){


        return(
            <div>
                <div class="boxOfButtons" >
                    <div className="buttonCollection" >
                        <button className="btn btn-accent" onClick={() => this.props.history.push('/sweet')} style={{fontSize: 30, borderColor: 'white', borderRadius: 20,}}>Sweet</button>
                        <button className="btn btn-accent" onClick={() => this.props.history.push('/packagedSavoury')} style={{fontSize: 30, borderColor: 'white', borderRadius: 20,}}>Packaged Savoury</button>
                        <button className="btn btn-accent" onClick={() => this.props.history.push('/impulse')} style={{fontSize: 30, borderColor: 'white', borderRadius: 20,}}>Impulse</button>
                        <button className="btn btn-accent" onClick={() => this.props.history.push('/pastry')} style={{fontSize: 30, borderColor: 'white', borderRadius: 20,}}>Pastry</button>
                        <button className="btn btn-accent" onClick={() => this.props.history.push('/other')}  style={{fontSize: 30, borderColor: 'white', borderRadius: 20,}}>Other</button>
                    </div>
            </div>
            </div>
        )
    }
}

export default withRouter(MenuStore);