import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({imageSource, buttonText, buttonLink, onButtonClick}) => {
  return (
    <div className="card">
      <img src={imageSource} alt="Card Image" style={{height:'250px'}}/>
      <div className="card-body">
        <Link to={buttonLink}><button className="btn btn-primary" >
          {buttonText}
        </button></Link>
      </div>
    </div>
  );
};

export default Card;
