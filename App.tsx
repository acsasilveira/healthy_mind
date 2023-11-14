import { Navigation } from "./src/navigations"
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return(
    <AuthProvider>
      <Navigation /> 
    </AuthProvider>
  )
}