import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Root from "./pages/root/Root";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>

  )
);
function App() {
  return <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>

    ;
}

export default App;
