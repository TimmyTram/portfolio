import './App.css'
import Introduction from './components/sections/Introduction'
import TechStack from './components/sections/TechStack'
import ProjectSection from './components/sections/ProjectSection'

function App() {
  return (
    <div className="app">
      <div className='flex-col-container'>
        <Introduction />
        <TechStack />
        <ProjectSection />
      </div>
    </div>
  )
}

export default App;