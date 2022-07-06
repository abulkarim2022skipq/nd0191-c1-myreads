# MyReads Project

MyReads is simple app created using starter template from Udacity's React Fundamentals course. This applcation allows user to place different books on different shelves. The shelves are _Currently Reading_, _Want to Read_, _Read_

## Features

- Application allows the User to drag a move the books from one shelf to another by:
  - selecting the shelf from dropdown
  - dragging the book from one shelf to another
- new book can be searched from search page and added to main page
- book can be clicked on to see details

## TL;DR

To run this application :

1.  clone the repo `git clone https://github.com/abulkarim2022skipq/nd0191-c1-myreads`

2.  change directory to started `cd starter`

3.  install all project dependencies with `npm install`

4.  start the development server with `npm start`

## Backend Server

This application uses an API provided by Udacity for the backend which consists of books details. Some endpoints are shown below

- [`getAll`](#getall)

- [`update`](#update)

- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute

- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]

- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`

- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
