import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: '',
    image: '',
    likes: 0,
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChange} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.postNewToy(e);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  postNewToy = () => {
    let { url, getToys } = this.props;
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    
    fetch(url, configObj)
      .then(res => res.json())
      .then(res => getToys(res))
      .catch(error => console.error("ERROR: ", error));
}



}

export default ToyForm;
