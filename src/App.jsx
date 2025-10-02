import './App.css'
import AppRoutes from "./routes/AppRoutes";



function App() {
  const userLoggedIn = false; // ejemplo, después lo conectas con tu auth
  return (
    <div>
      <AppRoutes userLoggedIn={userLoggedIn} />
    </div>
  )
}

export default App;

