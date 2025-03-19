import './App.css';
import WelcomePage from './assets/pages/welcome/Welcome-page';
import Inicio from './assets/pages/inicio/Inicio';
import MockHome from './assets/pages/MockHome';
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
    {
    path: "/mockhome",
    element: <MockHome />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
