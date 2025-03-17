import './App.css'
import Introduction from './components/sections/Introduction'
import TechStack from './components/sections/TechStack'
import ProjectSection from './components/sections/ProjectSection'
import StarIcon from './components/Icons/StarIcon/StarIcon'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div id='Home'>
      <Navbar />
      <div className="app">
        <StarIcon type='a' />
        <StarIcon type='b' />
        <div className='flex-col-container'>
          <Introduction />
          <TechStack />
          <ProjectSection />
        </div>
      </div>
    </div>
  )
}

export default App;