import BookDetailsBtns from "@/components/BookDetailsBtns";
import books from "../../../../public/booksData.json";

const BookDetailsPage = async ({params}) => {
    const {id} = await params;
    const expectedBook = books.find(item=> item.bookId == id);
    // console.log(expectedBook)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
    
    return ( 
        <div className="container mx-auto my-5">
            <h2 className="font-bold text-3xl text-center">Book Details</h2>
                <div className="card lg:card-side bg-base-100 shadow-sm grid grid-cols-2 container mx-auto my-6">
                <figure className="bg-[#f3f3f3]">
                    <img
                    src={image}
                    alt={bookName}
                    className="h-125 w-80"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">{bookName}</h2>
                    <p className="font-medium text-[20px]">By: {author}</p>
                    <p className="font-medium text-[20px] border-y border-dashed py-2">{category}</p>
                    <p className="font-medium text-[16px]"><span className="font-bold">Review:</span> {review}</p>

                    <div className="flex items-center gap-2 border-b border-dashed pb-2">
                        {
                            tags.map((tag, i) => <div key={i} className="badge badge-soft border border-green-500 text-green">{tag}</div>)
                        }
                    </div>

                    <p><span className="text-xl">Number of Pages:</span> <span className="font-bold text-xl">{totalPages}</span></p>
                    <p><span className="text-xl">Publisher:</span> <span className="font-bold text-xl">{publisher}</span></p>
                    <p><span className="text-xl">Year of Publishing:</span> <span className="font-bold text-xl">{yearOfPublishing}</span></p>
                    <p><span className="text-xl">Rating:</span> <span className="font-bold text-xl">{rating}</span></p>

                    <BookDetailsBtns expectedBook={expectedBook}></BookDetailsBtns>
                </div>
            </div>
        </div>
     );
}
 
export default BookDetailsPage;