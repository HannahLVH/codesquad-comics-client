import React from "react";
import booksData from "../data/books"

const Admin = () => {
    return (
    <main class="content-section">
        <div class="text-container-1">
            <header class="admin-header">
                <h1>ADMIN PAGE</h1>
                <button class="yellow-button">ADD NEW COMIC</button>
            </header>
                <br/>
            <div class="table-container">
                <div class="table-wrapper">
                    <table class="comic-admin-table">
                        <thead>
                            <tr class="gray-bg">
                                <th>COMIC TITLE</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booksData.map((book) => 
                                <tr>
                                    <td>{book.title}</td>
                                    <td><button class="blue-button">EDIT</button></td>
                                    <td><button class="yellow-button">DELETE</button></td>
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