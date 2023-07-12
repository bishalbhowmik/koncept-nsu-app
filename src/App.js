import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route/Route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        hideProgressBar={true}
        position="top-center"
        autoClose={1000}
      />
    </div>

  );
}

export default App;
