import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='container mt-5'>
            <div className='text-center mb-5'>
                <h1 className="display-3">Galactic Voyager</h1>
                <p className="lead">Presented by: Daniel Polnov</p>
            </div>
            <div className='text-center mb-4'>
                <h2><u>Visit Nasa Missions</u></h2>
                <div className="d-flex justify-content-center mt-3">
                    <Link to="/Missions" className="btn btn-primary btn-lg">
                        Missions
                    </Link>
                </div>
            </div>
            <div className='content'>
                <div className='card item mb-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff'}}>
                    <div className="card-body">
                        <h1 className="card-title">Welcome to Galactic Voyager</h1>
                        <p className="card-text">Your gateway to exploring the mysteries of the universe. From the latest NASA missions to breathtaking galactic imagery, we bring the wonders of space closer to Earth. Join us on this cosmic journey.</p>
                    </div>
                </div>
                <div className='card item mb-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff'}}>
                    <div className="card-body">
                        <h1 className="card-title">About Me</h1>
                        <p className="card-text">Hello, my name is Daniel Polnov. As a lifelong enthusiast of astronomy and space exploration, I created Galactic Voyager to share my passion with others. Join me as we delve into the cosmos together.</p>
                    </div>
                </div>
                <div className='card item mb-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff'}}>
                    <div className="card-body">
                        <h1 className="card-title">Missions</h1>
                        <p className="card-text">Explore the forefront of space exploration through our curated selection of NASA missions. Discover the objectives, achievements, and ongoing research that make each mission a critical step in our cosmic journey.</p>
                    </div>
                </div>
                <div className='card item mb-5' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff'}}>
                    <div className="card-body">
                        <h1 className="card-title">Photo Gallery</h1>
                        <p className="card-text">Witness the beauty of the universe through our photo gallery. Featuring stunning images from the Hubble Space Telescope and other observatories, let these images inspire you with the beauty of our universe.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
