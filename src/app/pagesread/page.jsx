import BookChart from '@/components/pagereadchart/BookChart';
import books from "../../../public/booksData.json";

const PagesRead = () => {
    return (
        <BookChart books={books}></BookChart>
    );
}

export default PagesRead;