import './App.css'
import headshot from '../public/headshot.jpg';

function App() {

  return (
    <div className='container'>
      <div className='flex-row-container'>
        <img className='headshot' src={headshot} alt="headshot" />

        <div className="flex-col-container">
          <div className="introduction">
            <h1>👋 Hello, my name is Timmy Tram</h1>
          </div>

          <div className="description">
            <p>
              I am an aspiring Full Stack Developer and enjoy building web applications from top to bottom.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
