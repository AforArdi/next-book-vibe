import BookChart from '@/components/pagereadchart/BookChart';
import books from "../../../public/booksData.json";

export const metadata = {
  title: "Book Details Chart",
  description: "Simple Book Vibe Application Recreated with Next Js",
};

const PagesRead = () => {
    return (
        <BookChart books={books}></BookChart>
    );
}

export default PagesRead;