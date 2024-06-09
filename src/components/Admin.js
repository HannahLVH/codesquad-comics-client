import React, {useEffect, useState} from "react";
import booksData from "../data/books"

const Admin = () => {
    const [books, setBooks] = useState([]);

    useEffect (() => {
        setBooks(booksData);
    }, [])

    return (
    <main class="content-section">
        <div class="text-container-1">
            <header class="admin-header">
                <h1>ADMIN PAGE</h1>
                <button className="yellow-button">ADD NEW COMIC</button>
            </header>
                <br/>
            <div className="table-container">
                <div className="table-wrapper">
                    <table className="comic-admin-table">
                        <thead>
                            <tr className="gray-bg">
                                <th>COMIC TITLE</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => 
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td><button className="blue-button">EDIT</button></td>
                                    <td><button className="yellow-button">DELETE</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br/>
    </main>
    )
  }

export default Admin