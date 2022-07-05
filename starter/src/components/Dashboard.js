import Header from "./Header";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Dashboard = ({ books, changeShelf }) => {
  const getBooksForShelf = (bookshelf) => {
    return books.filter(({ shelf }) => shelf === bookshelf);
  };

  return (
    <div>
      <Header></Header>
      <BookShelf
        shelfTitle="Currently Reading"
        shelfCode="currentlyReading"
        books={getBooksForShelf("currentlyReading")}
        changeShelf={changeShelf}
      ></BookShelf>
      <BookShelf
        shelfTitle="Want to Read"
        shelfCode="wantToRead"
        books={getBooksForShelf("wantToRead")}
        changeShelf={changeShelf}
      ></BookShelf>
      <BookShelf
        shelfTitle="Read"
        shelfCode="read"
        books={getBooksForShelf("read")}
        changeShelf={changeShelf}
      ></BookShelf>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
export default Dashboard;
