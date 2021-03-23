import React, { Component } from 'react';

class ToyCard extends Component {
  state = {
    likes: this.props.toyInfo.likes,
  }


  render() {
    let { name, image, likes } = this.props.toyInfo;
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
        <button onClick={() => { this.handleDelete(); this.props.getToys() }} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

  handleLike = () => {
    this.setState(prevState => (
      {
      likes: prevState.likes + 1
      }
    ))
  }
 
   patchLikes() {
    let { url, getToys } = this.props
      let configObj = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
      }
    
    fetch(url + `/${this.props.toyInfo.id}`, configObj)
      .then(res => res.json())
      .then(res => getToys(res))
      .catch(error => console.error('Error: ', error));
  }

 async handleDelete() {
   await fetch(this.props.url + "/" + this.props.toyInfo.id, {
     method: 'DELETE',
   });
}

}

export default ToyCard;
