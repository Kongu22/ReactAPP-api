import './App.css';
import MyRouter from "./MyRouter";
import background from './galacticImage1.jpg';

function App() {
 
  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const pageStyle = {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh', 
    backgroundImage: `url(${background})`, 
    color: '#fff', 
    overflow: 'auto', 
    position: 'relative',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    
  };

  return (
  <div>
    <div style={pageStyle}>
        <div style={contentStyle} >
          <MyRouter />
        </div>
    </div>
  </div>
    
    
      
  );
}

export default App;
