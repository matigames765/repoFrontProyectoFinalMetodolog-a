import { BrowserRouter } from "react-router";

import { AppRouter } from "./Routes/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
