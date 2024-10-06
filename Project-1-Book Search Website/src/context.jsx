import React, { useContext, useState, useEffect, useCallback } from 'react';

const URL = "https://openlibrary.org/search.json?title=";
const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('the lost world');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = data.docs.map(book => ({
                    id: book.key,
                    title: book.title,
                    cover_id: book.cover_i,
                    author_name: book.author_alternative_name? book.author_alternative_name.join(", ").slice(0,120) : "Unknown",
                    edition_count: book.edition_count || "Unknown",
                    first_publish_year: book.first_publish_year || "Unknown",
                }));

                //   console.log(newBooks)

                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                }
                else {
                    setResultTitle("No Search Result Found");
                }

            }
            else {
                setBooks([]);
                setResultTitle("No Search Result Found");
            }


            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <Appcontext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </Appcontext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(Appcontext);
};

export { Appcontext, AppProvider };
