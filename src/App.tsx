import './App.css'
import Introduction from './components/sections/Introduction'
import TechStack from './components/sections/TechStack'
import ProjectSection from './components/sections/ProjectSection'
import StarIcon from './components/Icons/StarIcon/StarIcon'

function App() {
  return (
    <div className="app">
      <StarIcon type='a' />
      <StarIcon type='b' />
      <div className='flex-col-container'>
        <Introduction />
        <TechStack />
        <ProjectSection />
      </div>
    </div>
  )
}

export default App;