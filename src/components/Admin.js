import React from "react";

const Admin = () => {
    return (
        <div class="content-section">
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
                            <tr>
                                <td>Batman: The Dark Knight Returns</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr class="gray-bg">
                                <td>Black Panther: A Nation Under Our Feet Book 1</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr>
                                <td>Fun Home: A Family Tragicomic</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr class="gray-bg">
                                <td>Batman: Hunter X Hunter Vol.1</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr>
                                <td>Lumberjanes Vol. 1</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr class="gray-bg">
                                <td>March: Book One</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr>
                                <td>One Piece, Vol. 1: Romance Dawn</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr class="gray-bg">
                                <td>Parable of the Sower</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr>
                                <td>Queer: A Graphic History</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr class="gray-bg">
                                <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr>
                                <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                            <tr class="gray-bg">
                                <td>Watchmen</td>
                                <td><button class="blue-button">EDIT</button></td>
                                <td><button class="yellow-button">DELETE</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br/>
    </div>
    )
  }

export default Admin