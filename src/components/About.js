import React from "react";

const About = () => {
    return (
    <main className="content-section">
        <div className="text-container-1">
            <span className="content-header">
                <header>
                    <h1>ABOUT CODESQUAD COMICS</h1>
                </header>
            </span>
            <div>
                <p>CodeSquad Comics is a collection of graphic novels read by Hannah Lopez. Copyrighted images are used for review purposes only. Meta information about this collection can be found below. A detailed list of all the graphic novels in this collection can be found on the homepage. Additional details about each comic book, including the author, genre, number of pages, and a brief synopsis, can be found by navigating to the homepage and clicking the image of the book cover or the Details link for the desired graphic novel.</p>
            </div>
            <section>
            <span className="content-header">
                <h2>COLLECTION DETAILS</h2>
            </span>
            <div className="collection-details-list">
                <ul>
                    <li>Total comic books: 12</li>
                    <li>Latest additions: 12</li>
                    <li>5-star ratings: 5</li>
                    <li>Publishers: 9</li>
                </ul>
            </div>
            </section>
        </div>
    </main>
    )
  }

export default About;