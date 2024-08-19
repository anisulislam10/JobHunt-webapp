import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/navbar.jsx';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';
import { RouterProvider } from 'react-router-dom';
import Jobs from './components/Jobs.jsx';
import Browse from './components/Browse.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
  path: '/jobs',
  element: <Jobs/>
  },
  {
    path: '/browse',
    element: <Browse/>
    },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;