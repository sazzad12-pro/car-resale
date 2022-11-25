import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
