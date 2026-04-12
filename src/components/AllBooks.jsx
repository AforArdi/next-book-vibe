import BookCard from "./ui/BookCard";
import books from "../../public/booksData.json";

const AllBooks = () => {
    return ( 
        <div className="container mx-auto mb-15">
            <h2 className="font-bold text-4xl text-center">Books</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                {
                    books.map(book=>{
                        return <BookCard key={book.bookId} book={book}></BookCard>
                    })
                }
            </div>
        </div>
     );
}
 
export default AllBooks;