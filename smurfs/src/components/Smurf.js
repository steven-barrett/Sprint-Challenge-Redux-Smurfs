import React from 'react';
import '../index.css';

class Smurf extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div className='smurf-card'>
                <p>Name: {this.props.smurf.name}</p>                
                <p>Age: {this.props.smurf.age}</p>                
                <p>Height: {this.props.smurf.height}</p>                
            </div>
        )
    }
}

export default Smurf;