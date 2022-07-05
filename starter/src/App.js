import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const changeShelf = (book, shelf) => {
    // temp array to change shelf
    let mutableArray = books.map((a) => {
      return { ...a };
    });

    let selectedBook = mutableArray.find((a) => a.id === book.id);

    if (selectedBook) {
      selectedBook.shelf = shelf;
    } else {
      book.shelf = shelf;
      mutableArray = [...mutableArray, book];
    }
    update(book, shelf).then((res) => {});
    setBooks(mutableArray);
  };

  useEffect(() => {
    const localData = localStorage.getItem("books");
    if (localData) {
      setBooks(JSON.parse(localData));
    } else {
      getAll().then((res) => {
        setBooks(res);
        // localStorage.setItem("books", JSON.stringify(res));
      });
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard books={books} changeShelf={changeShelf} />}
        ></Route>
        <Route
          exact
          path="/search"
          element={<Search books={books} changeShelf={changeShelf} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
