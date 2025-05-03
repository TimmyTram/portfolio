import Navbar from './components/Navbar'
import Layout from './layout/Layout'
import About from './sections/About'

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <About />
      </Layout>
    </>
  )
}

export default App