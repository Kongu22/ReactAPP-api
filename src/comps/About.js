import React from 'react';
import './Home.css';
import Footer from './Footer';
import myPhoto from './yebishe.jpg';
import myPhoto1 from './yebishe1.jpg';

export default function About() {
  const containerStyle = {
    textAlign: 'center',
  };
  
  const contentStyle = {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '1000px',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
   
    <div style={containerStyle}> 
        <h1 style={{marginTop: '40px',marginBottom: '140px'}}>About Me</h1>
      <div style={{marginBottom: '140px'}}>
        <div style={contentStyle} className='item mb-4'> 
          <h3>Hello, my name is Daniel Polnov.</h3>
          <h5>I've always loved space and everything about the cosmos outside our Earth. The huge and mysterious universe has always interested me. This love made me create "Galactic Voyager" - a website about exploring and learning more about stars, space travel, and new space tech. I want to make others as excited and curious about the universe as I am when I see the night sky.</h5>
        </div>
      </div>  
      <div className="d-flex justify-content-center align-items-center" style={{ gap: '50px' }}>
        <div className="p-2">
          <img src={myPhoto} alt="Daniel Polnov" className="img-fluid" style={{ objectFit: 'cover', width: '450px', height: '350px', borderRadius: '15%' }}/>
        </div>
        <div className="p-2">
          <img src={myPhoto1} alt="Daniel Polnov" className="img-fluid" style={{ objectFit: 'cover', width: '450px', height: '350px', borderRadius: '15%' }}/>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
