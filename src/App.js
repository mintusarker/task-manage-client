import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
