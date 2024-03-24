import React, { Component } from 'react';
import Footer from './Footer';



export default class Missions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchQuery: ''
    };
  }

  async  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=dhSobgfEz8LrGkgEE1p3BtaWrvywNSkMnAqofk8H&count=10')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const imagesWithFlag = [];
        for (let i = 0; i < data.length; i++) {
          imagesWithFlag.push({
            url: data[i].url,
            title: data[i].title,
            date: data[i].date,
            explanation: data[i].explanation,
            isOpen: false 
          });
        }
        this.setState({ images: imagesWithFlag });
        console.log(this.state.images);
      })
      .catch(error => console.log("Error: ", "There was an error fetching the data", error));
  }
  
  addImage = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=dhSobgfEz8LrGkgEE1p3BtaWrvywNSkMnAqofk8H&count=10')
      .then(response => response.json())
      .then(newImages => {
        const newImagesWithBoolean = [];
        for (let i = 0; i < newImages.length; i++) {
          newImagesWithBoolean.push({
            url: newImages[i].url,
            title: newImages[i].title,
            date: newImages[i].date,
            explanation: newImages[i].explanation,
            isOpen: false 
          });
        }
        this.setState(prevState => ({
          images: prevState.images.concat(newImagesWithBoolean) 
        }));
      })
      .catch(error => console.log("Error: ", "There was an error fetching the data", error));
  };

  toggleInfo = (imageTitle) => {
    const updatedImages = [];
  
    for (let i = 0; i < this.state.images.length; i++) {
      const image = this.state.images[i];
  
      if (image.title === imageTitle) {
        updatedImages.push({
          url: image.url,
          title: image.title,
          date: image.date,
          explanation: image.explanation,
          isOpen: !image.isOpen,
        });
      } else {
    
        updatedImages.push(image);
      }
    }
  
    this.setState({ images: updatedImages });
  };


  removeImage(titleToRemove) {
    const newImages = this.state.images.filter(function(image) {
      return image.title !== titleToRemove;
    });
    this.setState({
      images: newImages
    });
  }
  

  SearchByTitle = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

render() {
  const SearchTab = this.state.searchQuery;
  const images = this.state.images;

  let filteredImages;

  if (SearchTab) {
    const lowerCaseSearchTab = SearchTab.toLowerCase();

    filteredImages = images.filter(image => {
      const titleLowerCase = image.title.toLowerCase();
      return titleLowerCase.includes(lowerCaseSearchTab);
    });
  } else {
    filteredImages = images;
  }

  return (
    <div style={{display: 'flex',}}> 

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '10px', borderRadius: '10px', maxHeight: '40vh', overflowY: 'auto', maxWidth: '300px', color: 'black', marginTop:'120px',position: 'sticky', top: '120px', zIndex: '1000'
      }}>
        <h4>Mission Titles</h4>
        <ul>
          {filteredImages.map((image, index) => ( 
            <li key={index} style={{ margin: '10px 0' }}>{image.title}</li>
            ))}
        </ul>
      </div>
      
        
      <div className="container mt-5">
        <button className="btn btn-primary btn-lg" onClick={this.addImage} style={{ marginBottom: '20px' }}>Add Mission</button>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={SearchTab}
          onChange={this.SearchByTitle}
          style={{ marginBottom: '20px' }}
        />
        <div className="row">
          {filteredImages.map((image, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}> 
                <img src={image.url} alt={image.title} className="card-img-top" style={{ height: '250px', width: '100%', objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="card-title">{image.title}</h5>
                  <p className="card-text">Date: {image.date}</p>
                  {image.isOpen && (
                    <div style={{marginBottom:'10px'}}>
                      <p className="card-text">{image.explanation}</p>
                      <button className="btn btn-danger" onClick={() => this.removeImage(image.title)}>Remove Mission</button>
                    </div>
                  )}
                    <button className="btn btn-info" onClick={() => this.toggleInfo(image.title)}>
                      {(() => {
                        if (image.isOpen) {
                          return 'Less Information';
                        } else {
                          return 'More Information';
                        }
                      })()}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
  
}


