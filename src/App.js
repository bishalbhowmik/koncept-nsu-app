import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route/Route';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <RouterProvider router={router}>
      <Toaster/>
    </RouterProvider>
  );
}

export default App;
