import { BrowserRouter } from "react-router";
// import { AdminScreen } from "./components/screens/adminScreen/AdminScreen";
// import { LandingScreen } from "./components/screens/landingScreen/LandingScreen";
// import { LoginScreen } from "./components/screens/LoginScreen/LoginScreen";
// import { RegisterScreen } from "./components/screens/registerScreen/RegisterScreen";
import { AppRouter } from "./Routes/AppRouter";
// import { CatalogoScreen } from "./components/screens/CatalogoScreen/CatalogoScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      {/* <CatalogoScreen /> */}
      {/* <LandingScreen/> */}
      {/* <AdminScreen/> */}
      {/* <RegisterScreen />  */}
      {/* <LoginScreen />  */}
    </>
  );
}

export default App;
