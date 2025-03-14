import './App.css'
import TechIcon from './components/TechIcon/TechIcon'

function App() {

  return (
    <div className='flex-row-container'>
      <div className='container'>
        <img className='headshot' src="/portfolio/headshot.jpg" alt="headshot" />

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

      <div className="container">
        <div className="flex-col--container">
          <h2>Tech Stack:</h2>
          <div className="flex-row-container">
            <TechIcon name="java" size="50px" />
            <TechIcon name="python" size="50px" />
            <TechIcon name="javascript" size="50px" />
            <TechIcon name="typescript" size="50px" />
            <TechIcon name="nodejs" size="50px" />
            <TechIcon name="react" size="50px" />
            <TechIcon name="nextjs" size="50px" />
            <TechIcon name="mysql" size="50px" />
            <TechIcon name="mongodb" size="50px" />
            <TechIcon name="prisma" size="50px" />
            <TechIcon name="swift" size="50px" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
