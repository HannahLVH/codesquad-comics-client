import React from "react";

const Update = () => {
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
                <form action="#">
                    <div className="form-fields">
                        <div className="label-input">
                            <label HTMLFor="title">Title:</label>
                            <input type="title" name="title" id="title" value="title value stored in the database" />
                        </div>
                        <div>
                            <label HTMLFor="author">Author:</label>
                            <input type="author" name="author" id="author" value="author value stored in the database" />
                        </div>
                        <div>
                            <label HTMLFor="publisher-select">Publisher:</label>
                            <select name="publisher-select" id="publisher-select">
                                <option value="publisher-value" selected>publisher value stored in the database</option>
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
                            <input type="genre" name="genre" id="genre" value="genre data stored in the database" />
                        </div>
                        <div>
                            <label HTMLFor="number-pages">Number of pages:</label>
                            <input type="number-pages" name="number-pages" id="number-pages" value="255" />
                        </div>
                        <div>
                            <label HTMLFor="rating">Rating:</label>
                            <input type="rating" name="rating" id="rating" value="5"/>
                        </div>
                        <div>
                            <label className="synopsis-label">Synopsis:</label>
                            <textarea className="synopsis-textarea" id="synopsis" name="synopsis">synopsis value stored in the database</textarea>
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