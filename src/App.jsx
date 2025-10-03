import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className = "h-screen" >
        <Header />
        <div className=" p-4">
          <Outlet />
        </div>
        <Footer />
    </div >
  )
}

export default App;

{/* <div className = "grid h-screen" >
<div className="col flex flex-column">
  <Header />
  <div className="flex-grow-1 overflow-auto p-4">
    <Outlet />
  </div>
  <Footer />
</div>
</div > */}