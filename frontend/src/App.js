
import './App.css';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from './pages/Home/Home';
import Header from './components/navbar/Header';
import Authentication from './pages/authentication/Authentication';
import ContactList from './pages/contacts/ContactList';
import AddContact from './pages/contacts/AddContact';
import EditContact from './pages/contacts/EditContact';

function App() {
    const Layout = () => {
      return (
        <div className="app">
          <Header />
          <Outlet />
       
        </div>
      );
    };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/authPage",
          element: <Authentication />,
        },
        {
          path: "/contactList",
          element: <ContactList />,
        },
        {
          path: "/addContact",
          element: <AddContact />,
        },
        {
          path: "/editContact/:id",
          element: <EditContact />,
        },
      ],
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
