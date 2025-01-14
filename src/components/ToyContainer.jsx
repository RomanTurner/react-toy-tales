import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard url={props.url} getToys={props.getToys} key={toy.id} toyInfo={toy}/>)}
    </div>
  );
}

export default ToyContainer;
