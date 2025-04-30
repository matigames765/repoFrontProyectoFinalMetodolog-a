import { CatalogoScreen } from "./components/screens/catalogoScreen/CatalogoScreen"
import { LandingScreen } from "./components/screens/landingScreen/LandingScreen"


import { BrowserRouter } from "react-router";
// import { AdminScreen } from "./components/screens/adminScreen/AdminScreen";
// import { LandingScreen } from "./components/screens/landingScreen/LandingScreen";
// import { LoginScreen } from "./components/screens/LoginScreen/LoginScreen";
// import { RegisterScreen } from "./components/screens/registerScreen/RegisterScreen";
import { AppRouter } from "./Routes/AppRouter";
import { LoginScreen } from "./components/screens/LoginScreen/LoginScreen";



function App() {
  return (
    <>

      {/* <BrowserRouter>
        <AppRouter />
      </BrowserRouter> */}
      <CatalogoScreen />


      
    </>
  );
}

export default App;
