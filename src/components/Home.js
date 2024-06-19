import React, {useEffect, useState} from "react";
// import booksData from "../data/books";

const Home = () => {
    //     return (
    //         <div>
    //             <FetchBackEnd/>
    //         </div>
    //     );
    
    // function FetchBackEnd() {
        const [books, setBooks] = useState([]);
        const [errorMessage, setErrorMessage] = useState("");
        useEffect (() => {
        // setBooks(booksData);
        fetch(`http://localhost:8080/api/books`, {
            method: "GET",
            headers: {"Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.statusCode === 200) {
                    setBooks(result.data)
                } else {
                    throw new Error(result.error.message)
                }
            })
            .catch((error) => setErrorMessage(error.message))

        }, [])

    
    console.log("books :>> ", books);
    console.log("errorMessage :>>", errorMessage);

    return (
    <main>
        <div className="content-section">
            <br/>
            <div className="text-container-1">
                
                <span className="content-header">
                    <header>
                        <h1>CODESQUAD COMICS</h1>
                    </header>
                </span>
                <div>
                    <p>"CodeSquad Comics is a collection of graphic novels read by Hannah Lopez. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta information about this collection. Login is only available to the site administrator at this time.</p>
                </div>
            </div>
            <div className="text-container-1">
                <article>
                    <span className="content-header">
                        <h2>COMPLETE COMIC COLLECTION</h2>
                    </span>
                    <br/>
                    <div className="comic-collection-layout comic-link-styling">
                        {errorMessage ? (
                        <p>{errorMessage}</p>
                        ) : (
                        books && books.map((book) => (
                            <div className="comic-thumbnail" key={book._id}>
                                <a href={`/${book._id}`}><img src={`images/${book.image}`} alt={`Front cover of comic book ${book.title}`} style={{width: "200px"}}/></a>
                                <div className="comic-thumbnail-text">
                                    <span>{book.title}</span><br/>by {book.author}<br/>{book.rating}<br/><a href="#">Details</a>
                                </div>
                            </div>
                        ))
                        )}
                    </div>
                    <br/>    
                        <div className="display-more-button">
                        <button className="yellow-button">DISPLAY MORE</button>
                        </div>
                </article>
            </div>
            <br/>
        </div>
    </main>
    )
}
// }

export default Home;