import { BrowserRouter } from "react-router";

import { AppRouter } from "./Routes/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  );
}

export default App;
