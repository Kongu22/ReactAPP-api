import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    zIndex: '1000',
  };

  const iconStyle = {
    fontSize: '24px',
    marginLeft: '10px',
    verticalAlign: 'middle',
  };

  return (
    <MDBFooter  className='text-center text-lg-left'>
    <div className='text-center p-5'> 
      <footer style={footerStyle}>
        © 2024 Daniel Polnov. All rights reserved to Daniel Polnov.
        <a href="https://github.com/Kongu22" target="_blank" rel="noopener noreferrer">
          <FaGithub style={iconStyle} />
        </a>
      </footer>
    </div>
    </MDBFooter>
  );
}

export default Footer;
