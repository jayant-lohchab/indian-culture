import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ExplorePage from "./pages/Explore";
import FestivalsPage from "./pages/Festivals";
import TraditionsPage from "./pages/Traditions";
import CuisinePage from "./pages/Cuisine";
import ArtsAndMusic from "./pages/Arts&Music";
import HistoryPage from "./pages/History";
import CommunityPage from "./pages/Community";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SearchPage from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path:"explore",
        element: <ExplorePage />,
        children: [
          { path: "festivals", element: <FestivalsPage /> },
          { path: "traditions", element: <TraditionsPage /> },
          { path: "cuisine", element: <CuisinePage /> },
          { path: "history", element: <HistoryPage /> },
          { path: "artsandmusic", element: <ArtsAndMusic /> },
        ],
      },
      { path: "community", element: <CommunityPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
