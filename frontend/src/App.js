import logo from './logo.svg';
import './App.css';
import '../src/styles/styles.css'

import { RouterProvider } from "react-router-dom";
import { allroutersfront } from './routes/allroutes';
//import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <RouterProvider router={allroutersfront}></RouterProvider>
    </>
    
  );
}

export default App;
