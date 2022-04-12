import AppRoutes from "./Routes/AppRoutes";
import '../src/assets/css/index.css'
import './index.css'
import { AuthProvider } from "./components/Context/AuthContext";
import { DragonsProvider } from "./components/Context/DragonsContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <DragonsProvider>
          <AppRoutes></AppRoutes>
        </DragonsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
