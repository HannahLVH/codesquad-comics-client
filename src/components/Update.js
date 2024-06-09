import React, {useEffect, useState} from "react";

import booksData from "../data/books"

const Update = () => {
    const _id = "66b62a49-a8de-4914-ab3f-49fe0554c08a";
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
        const findBook = booksData.find((book) => book._id === _id)
        // localStorage.setItem("findBook", JSON.stringify(findBook));
        setBook(findBook);
    }, [_id])

    const handleUpdateSubmit = (e) => {
        const {name, value} = e.target;
        setBook((prevBook) => ({...prevBook, [name]: value}))
        console.log("Method running successfully");
    }

    console.log(book)

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
                                onChange={handleUpdateSubmit} required />
                            </div>
                            <div>
                                <label htmlFor="author">Author:</label>
                                <input type="text" name="author" id="author" 
                                //value="author value stored in the database"
                                value={book.author}
                                onChange={handleUpdateSubmit} />
                            </div>
                            <div>
                                <label htmlFor="publisher">Publisher:</label>
                                <select name="publisher" id="publisher"
                                value={book.publisher}
                                onChange={handleUpdateSubmit}
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
                                onChange={handleUpdateSubmit}/>
                            </div>
                            <div>
                                <label htmlFor="pages">Number of pages:</label>
                                <input type="number" name="pages" id="pages" 
                                value={book.pages}
                                onChange={handleUpdateSubmit} />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating:</label>
                                <input type="number" name="rating" id="rating" value={book.rating}
                                onChange={handleUpdateSubmit}/>
                            </div>
                            <div>
                                <label className="synopsis-label">Synopsis:</label>
                                <textarea className="synopsis-textarea" id="synopsis" name="synopsis"
                                value={book.synopsis}
                                onChange={handleUpdateSubmit}></textarea>
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