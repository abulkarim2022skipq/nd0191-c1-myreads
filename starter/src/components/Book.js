import PropTypes from "prop-types";

const Book = ({ book, changeShelf }) => {
  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("book", JSON.stringify(book));
  };
  return (
    <div
      className="book"
      draggable
      onDragStart={(e) => {
        onDragStart(e, book.id);
      }}
    >
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks ? book.imageLinks.smallThumbnail : ""
              }")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={"none"}
              onChange={(e) => {
                changeShelf(book, e.target.value);
              }}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          book.authors.map((author) => (
            <div key={author} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfCode: PropTypes.string.isRequired,
};
export default Book;
