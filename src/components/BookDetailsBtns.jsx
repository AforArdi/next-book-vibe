'use client'

import { BookContext } from "@/context/BookProvider";
import { useContext } from "react";

const BookDetailsBtns = ({expectedBook}) => {
    const {handleMarkAsRead, handleWishList} = useContext(BookContext);

    return ( 
        <div className="card-actions">
            <button className="btn" onClick={()=> handleMarkAsRead(expectedBook)}>Add to Read</button>
            <button className="btn btn-secondary" onClick={()=> handleWishList(expectedBook)}>Add to Wishlist</button>
        </div>
     );
}
 
export default BookDetailsBtns;