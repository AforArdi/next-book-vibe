'use client'

import BookProvider from "@/context/BookProvider";

const Provider = ({children}) => {
    return ( 
        <>
            <BookProvider>{children}</BookProvider>
        </>
     );
}
 
export default Provider;