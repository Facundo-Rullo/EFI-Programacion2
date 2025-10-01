import './App.css'
import AppRoutes from "./routes/AppRoutes";



function App() {
  const userLoggedIn = false; // ejemplo, después lo conectas con tu auth
  return (
    <div className='flex justify-content-center align-items-center content'>
      <AppRoutes userLoggedIn={userLoggedIn} />
    </div>
  )
}

export default App;

