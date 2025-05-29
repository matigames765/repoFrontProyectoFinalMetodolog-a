import React from 'react';
import ReactDOM from 'react-dom/client';


// import App from './App';
// import { AdminScreen } from './components/screens/AdminScreen/AdminScreen';
import Landing from './components/screens/LoginRegister/Landing';


// const isAdmin = window.location.pathname.startsWith('/admin');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Landing/>
    {/* {isAdmin ? <AdminScreen /> : <App />} */}
  </React.StrictMode>
);