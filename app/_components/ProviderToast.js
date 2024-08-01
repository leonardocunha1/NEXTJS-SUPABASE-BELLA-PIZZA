"use client";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function ProviderToast({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

export default ProviderToast;
