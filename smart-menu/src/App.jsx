import './App.css';
import WelcomePage from './assets/components/welcome/Welcome-page';
import Inicio from './assets/components/inicio/Inicio';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/inicio",
      element: <Inicio />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
