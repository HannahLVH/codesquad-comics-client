import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import booksData from "../data/books"

const Admin = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect (() => {
        // setBooks(booksData);
        fetch(`http://localhost:8080/api/books`, {
            method: "GET",
            headers: {"Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.statusCode === 200) {
                    setBooks(result.data)
                } else {
                    throw new Error (result.error.message)
                }
            })
            .catch((error) => 
            setErrorMessage(error.message))
    }, [])

    // console.log("books :>>", books)
    // console.log("errorMessage :>>",
    // errorMessage);

    const handleDeleteBook = (bookId) => {
        fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.statusCode === 200) {
                console.log("Success! Book deleted")
            } else {
                throw new Error (result.error.message)
            }
        })
        .catch((error) => console.log("Error", error));
    }

    return (
    <main className="content-section">
        <div className="text-container-1">
            <header className="admin-header">
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
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {errorMessage ? (
                                <p>{errorMessage}</p>
                                ) : (
                                books && books.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.title}</td>
                                    <td><button className="blue-button" onClick={() => navigate(`/edit/${book._id}`)}>UPDATE</button></td>
                                    <td><button className="yellow-button" onClick={() => handleDeleteBook(book._id)} >DELETE</button></td>
                                </tr>
                            ))
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