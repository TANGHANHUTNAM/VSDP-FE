import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import InformationPage from "../pages/InformationPage";
import ContactPage from "../pages/ContactPage";
import CVPage from "../pages/CVPage";
import ApplyPage from "../pages/ApplyPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "informations",
        element: <InformationPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "cv",
        element: <CVPage />,
      },
      {
        path: "apply",
        element: <ApplyPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
