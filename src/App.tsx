import Navbar from './components/Navbar'
import Layout from './layout/Layout'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import TechStack from './sections/TechStack'

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <About />
        <Contact />
        <Education />
        <TechStack />
      </Layout>
    </>
  )
}

export default App