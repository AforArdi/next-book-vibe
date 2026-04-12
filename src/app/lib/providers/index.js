'use client';

import BookProvider from "@/context/BookProvider";
import { Flip, ToastContainer } from "react-toastify";

const Provider = ({children}) => {
    return ( 
        <>
            <BookProvider>
                {children}
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="colored"
                    transition={Flip}
                />
            </BookProvider>
        </>
     );
}
 
export default Provider;