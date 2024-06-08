import React from "react";

const Create = () => {
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
                    <form action="#">
                        <div className="form-fields">
                            <div>
                                <label HTMLFor="title">Title:</label>
                                <input type="title" name="title" id="title" placeholder="Title" />
                            </div>
                            <div>
                                <label HTMLFor="author">Author:</label>
                                <input type="author" name="author" id="author" placeholder="Author" />
                            </div>
                            <div>
                                <label HTMLFor="publisher-select">Publisher:</label>
                                <select name="publisher-select" id="publisher-select">
                                    <option value="select" selected disabled>Select</option>
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
                                <label HTMLFor="genre">Genre:</label>
                                <input type="genre" name="genre" id="genre" placeholder="Genre" />
                            </div>
                            <div>
                                <label HTMLFor="number-pages">Number of pages:</label>
                                <input type="number-pages" name="number-pages" id="number-pages" placeholder="Number of pages" />
                            </div>
                            <div>
                                <label HTMLFor="rating">Rating:</label>
                                <input type="rating" name="rating" id="rating" placeholder="number (0-5)"/>
                            </div>
                            <div>
                                <label className="synopsis-label">Synopsis:</label>
                                <textarea className="synopsis-textarea" id="synopsis" name="synopsis" placeholder="Synopsis"></textarea>
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