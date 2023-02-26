import { FC } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toastify:FC = () => {
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

export default Toastify
