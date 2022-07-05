import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./../BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const Search = ({ changeShelf }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      search(searchQuery, 5).then((res) => {
        if (res["error"] === undefined) {
          setSearchResults(res);
        } else {
          setSearchResults([]);
        }
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        {searchResults.length > 1 && (
          <ol className="books-grid">
            {searchResults.map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
          </ol>
        )}
        {searchQuery.length > 0 && searchResults.length < 1 && (
          <h1>Could not find any books</h1>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  changeShelf: PropTypes.func.isRequired,
};
export default Search;
