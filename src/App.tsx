import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App