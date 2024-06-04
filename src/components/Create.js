import React, {useState} from "react";

const Create = () => {
    const [createBook, setCreateBook] = useState({
        title: "",
        author: "",
        publisher:"",
        genre: "",
        pages: "",
        rating: "",
        synopsis: ""
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setCreateBook((prevCreateBook) => ({...prevCreateBook, [name]: value}))
        console.log("Method running successfully")
    }

    console.log(createBook)
    
    return (
      <div>
        <div className="content-section">
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
                                <input type="text" name="title" id="title" placeholder="Title" 
                                value={createBook.title}
                                onChange={handleFormSubmit} required/>
                            </div>
                            <div>
                                <label htmlFor="author">Author:</label>
                                <input type="text" name="author" id="author" placeholder="Author"
                                value={createBook.author}
                                onChange={handleFormSubmit}  required/>
                            </div>
                            <div>
                                <label htmlFor="publisher">Publisher:</label>
                                <select name="publisher" id="publisher" defaultValue={"select"}                     onChange={handleFormSubmit} 
                                required>
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
                                <input type="text" name="genre" id="genre" placeholder="Genre"
                                value={createBook.genre}
                                onChange={handleFormSubmit} 
                                required/>
                            </div>
                            <div>
                                <label htmlFor="pages">Number of pages:</label>
                                <input type="number" name="pages" id="pages" placeholder="Number of pages"
                                value={createBook.pages}
                                onChange={handleFormSubmit} 
                                required/>
                            </div>
                            <div>
                                <label htmlFor="rating">Rating:</label>
                                <input type="number" name="rating" id="rating" placeholder="number (0-5)"
                                value={createBook.rating}
                                onChange={handleFormSubmit} 
                                required/>
                            </div>
                            <div>
                                <label className="synopsis">Synopsis:</label>
                                <textarea className="synopsis" id="synopsis" name="synopsis" placeholder="Synopsis"
                                value={createBook.synopsis}
                                onChange={handleFormSubmit} 
                                required></textarea>
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
        </div>
      </div>
    )
  }

export default Create;