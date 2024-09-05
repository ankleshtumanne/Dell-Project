import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AllRoutes from './routes/AllRoutes'

function App() {
 
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
