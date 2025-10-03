import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'


function App() {
  return (
    <div className = "grid h-screen" >
      <div className="col flex flex-column">
        <Header />
        <div className="flex-grow-1 overflow-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default App;

