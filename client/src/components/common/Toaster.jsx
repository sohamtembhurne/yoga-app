import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Notifications for toaster
export const notifyHello = () => toast.info("Hello, register to join");
export const notifyUser = () => toast.info("Welcome back to Mindful");
export const notifyPaymentSuccess = () => toast.success("Payment successful!");
export const notifyPaymentFail = () => toast.error(`Payment failed`);

const Toaster = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    );
};

export default Toaster;