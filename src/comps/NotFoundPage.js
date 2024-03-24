
import React from 'react';
import { Link } from 'react-router-dom';
import background from '../galacticImage1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faHouse } from '@fortawesome/free-solid-svg-icons'; // Import the house icon

const BackgroundStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundImage: `url(${background})`
};

const textBlockStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '20px',
  borderRadius: '15px',
  maxWidth: '600px',
};

const NotFoundPage = () => {
  return (
    <div style={BackgroundStyle}>
      <div style={textBlockStyle} className="text-center">
        <h1 className="display-3 fw-bold text-danger"><span style={{fontSize: '140px'}}>4</span><span style={{fontSize: '80px'}}>0</span><span style={{fontSize: '140px'}}>4</span></h1>
        <p className="fs-3"> <span className="text-danger">Oops! </span>The page you're looking for isn't here.</p>
        <br></br>
        <Link to="/Home" className="btn btn-primary btn-lg" role="button">
          <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
            <FontAwesomeIcon icon={faHouse} size="2x" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
