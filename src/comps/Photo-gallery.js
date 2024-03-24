import React, { Component } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const result = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=dhSobgfEz8LrGkgEE1p3BtaWrvywNSkMnAqofk8H&count=20`
      );
      const images = await result.json();
      this.setState({ images, isLoading: false });
    } catch (error) {
      this.setState({ error: error.toString(), isLoading: false });
    }
  }

  nextImage = () => {
    this.setState(prevState => {
      let nextIndex = prevState.currentIndex + 1;
      if (nextIndex >= prevState.images.length) {
        nextIndex = 0;
      }
      return { currentIndex: nextIndex };
    });
    
  };

  render() {
    const { images, currentIndex, isLoading, error } = this.state;
    const currentImage = images[currentIndex];
  
    const imageSizeStyle = {
      width: '800px',
      height: '800px',
      objectFit: 'cover' 
    };
  
    const nextButtonStyle = {
      padding: '15px 30px',
      fontSize: '20px',
      cursor: 'pointer',
    };
  
    const loadingStyle = {
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    };
  
    return (
      <div style={{marginTop: '100px'}}>
  
        <div className="photo-gallery-container">
          <div>
            {isLoading && (
              <div className="d-flex justify-content-center align-items-center" style={loadingStyle}>
                <span style={{marginTop:'-400px', marginRight: '10px', fontSize: '30px' }}>Loading</span>
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" style={{marginTop:'-400px', fontSize: '50px' }} /> 
              </div>
            )}
          </div>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {currentImage && (
            <div className="gallery-display d-flex justify-content-center align-items-center flex-column">
              <button className="btn btn-primary btn-lg mb-4" style={nextButtonStyle} onClick={this.nextImage}>Next</button>
              <div className="image-container">
                <img src={currentImage.url} alt="NASA APOD" className="img-fluid current-image rotating" style={imageSizeStyle} />
                <div className="image-info mt-2 text-white bg-dark p-2 rounded">Date: {currentImage.date}</div>
              </div>
            </div>
          )}
          <Footer />
        </div>
      </div>
    );
  }
}