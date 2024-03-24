import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { FaSpaceShuttle, FaHome, FaInfo, FaRocket, FaImages } from 'react-icons/fa'; // Import additional icons

export default function MyRouter() {
  return (
    <div>
      <div>
        <nav style={{borderRadius: '5px'}} className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div style={{marginLeft: '10px' }}>
              <Link to="/Home" className="navbar-brand">
              <FaSpaceShuttle size={30} />
              <span style={{position:'absolute', marginLeft: '10px' }}>Galactic Voyager</span>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ul className="navbar-nav mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '-50px' }}>
                  <li className="nav-item" style={{ margin: '0 30px' }}>
                    <Link to="/home" className="nav-link"><FaHome size={30} /></Link> {/* Home icon */}
                  </li>
                  <li className="nav-item" style={{ margin: '0 30px' }  }>
                    <Link to="/about" className="nav-link"><FaInfo size={30} /></Link> {/* About icon */}
                  </li>
                  <li className="nav-item" style={{ margin: '0 30px' }  }>
                    <Link to="/missions" className="nav-link"><FaRocket size={30} /></Link> {/* Missions icon */}
                  </li>
                  <li className="nav-item" style={{ margin: '0 30px' }  }>
                    <Link to="/photo-gallery" className="nav-link"><FaImages size={30} /></Link> {/* Photo Gallery icon */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
