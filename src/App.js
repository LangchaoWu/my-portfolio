
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">

        <div className='spline-container'>
          <div className='nav-bar'>
              <div className='nav-text'>Home</div>
              <div className='nav-text'>About</div>
              <div className='nav-text'>Projects</div>
              <div className='nav-text'>Contact</div>

          </div>

          <div className='Welcome-text'>

          </div>

          <Spline  className="spline" scene="https://prod.spline.design/f4ehgKXIsBCo8OSF/scene.splinecode" />
        </div>
       
     
      
     
     
    </div>
  );
}

export default App;
