import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
// import booksData from "../data/books";

const Update = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({
        title: "",
        author: "",
        publisher:"",
        genre: "",
        pages: "",
        rating: "",
        synopsis: ""
    });

    useEffect(() => {
        // const findBook = booksData.find((book) => book._id === _id)
        // localStorage.setItem("findBook", JSON.stringify(findBook));
        // setBook(findBook);
        fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.statusCode ===200)
                {
                    console.log(result)
                    setBook(result.data)
                } else {
                    throw new Error(result.error.message)
                }
            })
            .catch((error) => console.log("Error", error))
    }, [bookId])

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setBook((prevBook) => ({...prevBook, [name]: value}))
    }

    const handleUpdateSubmit = (e) => {
        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value
        }
        e.preventDefault();
        console.log("Method running successfully", book);

        fetch(`http://localhost:8080/api/books/update/${bookId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                console.log("Success! Book updated", result)
                setBook(result.data)
                navigate("/admin")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => console.log("Error", error));
    }

    return (
        <main className="content-section">
            <br/>
            <div className="text-container-1">
                <span className="content-header">
                    <header>
                        <h1>UPDATE COMIC</h1>
                    </header>
                </span>
                <div className="form-container">
                    <form action="#" onSubmit={handleUpdateSubmit}>
                        <div className="form-fields">
                            <div className="label-input">
                                <label htmlFor="title">Title:</label>
                                <input type="text" name="title" id="title" 
                                // value="title value stored in the database"
                                value={book.title}
                                onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label htmlFor="author">Author:</label>
                                <input type="text" name="author" id="author" 
                                //value="author value stored in the database"
                                value={book.author}
                                onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="publisher">Publisher:</label>
                                <select name="publisher" id="publisher"
                                value={book.publisher}
                                onChange={handleInputChange}
                            >
                                    <option value="publisherValue" >publisher value stored in the database</option>
                                    <option value="boom-box">BOOM! Box</option>
                                    <option value="dc-comics">DC Comics</option>
                                    <option value="harry-n-abrams">Harry N. Abrams</option>
                                    <option value="icon-books">Icon Books</option>
                                    <option value="image-comics">Image Comics</option>
                                    <option value="marvel">Marvel</option>
                                    <option value="simon-schuster">Simon & Schuster</option>
                                    <option value="top-shelf-productions">Top Shelf Productions</option>
                                    <option value="viz-media-llc">VIZ Media LLC</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="genre">Genre:</label>
                                <input type="text" name="genre" id="genre" 
                                //value="genre data stored in the database" 
                                value={book.genre}
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <label htmlFor="pages">Number of pages:</label>
                                <input type="number" name="pages" id="pages" 
                                value={book.pages}
                                onChange={handleInputChange} />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating:</label>
                                <input type="number" name="rating" id="rating" value={book.rating}
                                onChange={handleInputChange}/>
                            </div>
                            <div>
                                <label className="synopsis-label">Synopsis:</label>
                                <textarea className="synopsis-textarea" id="synopsis" name="synopsis"
                                value={book.synopsis}
                                onChange={handleInputChange}></textarea>
                            </div>
                            <br/>
                            <div className="submit-button">
                                <button className="submit-button yellow-button">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
        </main>
    )
  }

export default Update;