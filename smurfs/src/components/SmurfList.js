import React from "react";

import { connect } from "react-redux";

import {getData} from '../actions/index'; 
import {addSmurf} from '../actions/index'; 
import {deleteSmurf} from '../actions/index'; 
import Smurf from "./Smurf";
import AddSmurf from './AddSmurf';

import '../index.css';

class SmurfList extends React.Component {
  componentDidMount() {
      this.props.getData();
  }

  addSmurf = item => {
      this.props.addSmurf(item);                      
  }

deleteSmurf = id => {
  this.props.deleteSmurf(id);
}

render() {
    return (
        <div className='smurfs-div'>          
        {this.props.smurfs.map(smurf => {                      
            return <Smurf key={smurf.id} smurf={smurf} deleteSmurf={this.deleteSmurf} />;
          })}
        <AddSmurf addSmurf={this.addSmurf} />
        </div>
    )
}
};

const mapStateToProps = state => ({  
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs,
  smurfs: state.smurfs
});
  
  export default
    connect(mapStateToProps,
      { getData, addSmurf, deleteSmurf }
    )(SmurfList);
  