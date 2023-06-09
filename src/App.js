import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Root from "./pages/Root";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-me", element: <AboutMe /> },
      { path: "/education", element: <Education /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
