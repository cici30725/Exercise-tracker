// index.html
import { useState } from 'react';
import {SimpleGrid} from '@chakra-ui/react';
import BookCard from '../components/BookCard';
import AddBookCard from '../components/AddBookCard';
import { getAllBooks } from '../lib/queryLib';

function HomePage({ initialBooks }) {
    const [bookArr, setBookArr] = useState(initialBooks);

    async function handleAddBook(book) {
        if(book.title && book.author){
            // const book = insertBook(book.title, book.author)
            try {
                const bookData = {bookName: book.title, author: book.author};
                const res = await fetch('/api/books/', { 
                        method: 'POST',
                        body: JSON.stringify(bookData),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                if(!res.ok){
                    throw new Error('Add book request failed');
                }

                const bookJson = await res.json();
                console.log(bookJson);
                setBookArr([...bookArr, {
                    id: bookJson.id,
                    bookName: bookJson.bookName,
                    author: bookJson.author,
                }]);

            } catch(e) {
                // Catch code
                console.log('There was an error', e);
            }
        }
    }

    function handleDeleteBook(id) {
        fetch(`/api/books/${id}`, { 
                method: 'DELETE',
            })
            .then((res) => {
                if(!res.ok){
                    return Promise.reject('Book deletion failed');
                }
            })
            .then(() => {
                const filteredList = bookArr.filter(book => id !== book.id);
                setBookArr(filteredList);
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    }

    const listBooks = bookArr.map( book => <BookCard key={book.id} id={book.id} title={book.bookName} author={book.author} onDeleteBook={handleDeleteBook}/>);

    return (
        <SimpleGrid  mx='100px' my='50px' spacing='40px' minChildWidth='300px'>
            {listBooks}
            <AddBookCard onAddBook={handleAddBook}/>
        </SimpleGrid>
    );
}

export async function getServerSideProps(context) {
    const books = await getAllBooks();
    return {
      props: {initialBooks: books}, // will be passed to the page component as props
    }
}

export default HomePage;