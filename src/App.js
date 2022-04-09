import AppRoutes from "./Routes/AppRoutes";
import '../src/assets/css/index.css'
import './index.css'
import { AuthProvider } from "./components/Context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes></AppRoutes>
      </AuthProvider>
    </div>
  );
}

export default App;
