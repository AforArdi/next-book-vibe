'use client'
const BookDetailsBtns = () => {
    return ( 
        <div className="card-actions">
            <button className="btn" onClick={()=> handleMarkAsRead(expectedBook)}>Add to Read</button>
            <button className="btn btn-secondary" onClick={()=> handleWishList(expectedBook)}>Add to Wishlist</button>
        </div>
     );
}
 
export default BookDetailsBtns;