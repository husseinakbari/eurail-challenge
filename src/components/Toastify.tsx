import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toastify() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="colored"
      bodyClassName={() => "toast__contanier"}
    />
  );
}
