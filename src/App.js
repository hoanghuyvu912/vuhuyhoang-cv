import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Contact from "./pages/contact/Contact";
import AboutMe from "./pages/about-me/AboutMe";
import Journey from "./pages/journey/Journey";
import Skills from "./pages/skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-me", element: <AboutMe /> },
      { path: "/journey", element: <Journey /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
