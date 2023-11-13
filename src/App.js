import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/root/Root";
import Home from "./pages/home/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />

    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />
    ;
}

export default App;
