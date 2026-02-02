import RouterManager from "./router/manager"
import './assets/styles/global.css'
import { AuthProvider } from "./auth/AuthContext";

export default function App() {

  return (
    <AuthProvider>
      <RouterManager />
    </AuthProvider>
  );

};


