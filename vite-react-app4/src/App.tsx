import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutUS from "./comp/about";
import ContactUS from "./comp/contact";
import Counter from "./comp/counter";
import DashBoard from "./comp/dashboard";

import Menu from "./comp/menu";
import GridData from "./comp/griddata";

const routes = [
  {
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <AboutUS />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/aboutus",
        element: <AboutUS />,
      },
      {
        path: "/contactus",
        element: <ContactUS />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/griddata",
        element: <GridData />,
      },
    ],
  },
];
const myrouter = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={myrouter} />;
}

export default App;
