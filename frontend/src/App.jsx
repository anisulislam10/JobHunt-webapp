import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/navbar.jsx';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';
import { RouterProvider } from 'react-router-dom';
import Jobs from './components/Jobs.jsx';
import Browse from './components/Browse.jsx';
import Profile from './components/Profile.jsx';
import JobDescription from './components/JobDescription.jsx';

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
    path: '/description/:id',
    element: <JobDescription/>
    },
  {
    path: '/browse',
    element: <Browse/>
    },
    {
      path: '/profile',
      element: <Profile/>
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