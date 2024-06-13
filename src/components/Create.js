import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const navigate = useNavigate();
    const [createBook, setCreateBook] = useState({
        title: "",
        author: "",
        publisher:"",
        genre: "",
        pages: "",
        rating: "",
        synopsis: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCreateBook((prevCreateBook) => ({...prevCreateBook, [name]: value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value
        }
        console.log("Method running successfully", body)

        fetch("http://localhost:8080/api/books/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                console.log("Success! Book created", body)
                navigate("/admin")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => console.log("Error", error));
    };

    // console.log(setCreateBook);

    return (
    <main className="content-section">
        <br/>
        <div className="text-container-1">
            <span className="content-header">
                <header>
                    <h1>CREATE NEW COMIC</h1>
                </header>
            </span>
            <div className="form-container">
                <form action="#" onSubmit={handleFormSubmit}>
                    <div className="form-fields">
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" placeholder="Title" value={createBook.title} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="author">Author:</label>
                            <input type="text" name="author" id="author" placeholder="Author" value={createBook.author} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="publisher">Publisher:</label>
                            <select name="publisher" id="publisher" defaultValue={"select"} onChange={handleInputChange} required>
                                <option value="select" disabled>Select</option>
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
                            <input type="text" name="genre" id="genre" placeholder="Genre" value={createBook.genre} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="pages">Number of pages:</label>
                            <input type="number" name="pages" id="pages" placeholder="Number of pages" value={createBook.pages} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <input type="number" name="rating" id="rating" placeholder="number (0-5)" value={createBook.rating} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label className="synopsis">Synopsis:</label>
                            <textarea className="synopsis" id="synopsis" name="synopsis" placeholder="Synopsis" value={createBook.synopsis} onChange={handleInputChange} required></textarea>
                        </div>  
                        <br/>             
                        <div className="submit-button">
                            <button className="yellow-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <br/>
    </main>
    )
  }

export default Create;