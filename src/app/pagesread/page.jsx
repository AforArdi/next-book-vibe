import BookChart from '@/components/pagereadchart/BookChart';

const booksPromise = async ()=>{
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = res.json();
    return data;
}

const PagesRead = async () => {
    const books = await booksPromise();

    return (
        <BookChart books={books}></BookChart>
    );
}

export default PagesRead;