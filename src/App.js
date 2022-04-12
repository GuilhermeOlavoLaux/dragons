import AppRoutes from "./Routes/AppRoutes";
import '../src/assets/css/index.css'
import './index.css'
import { AuthProvider } from "./components/Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes></AppRoutes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
