import React, { Component } from 'react';
// import '../App.css';

class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.smurf.name === '') {
      return;
    }

    this.props.addSmurf(this.state.smurf);

    this.setState({
        smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = ev => {
    ev.persist();
    let value = ev.target.value;

    this.setState(prevState => ({
        smurf: {
        ...prevState.smurf,
        [ev.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="friend-form">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default AddSmurf;
