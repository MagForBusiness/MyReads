import React from "react";

export const BookOption = ({ shelf, GetSelectedBook }) => {
  // const [Select, setSelect] = useState(shelf);

  const handleChange = (event) => {
    console.log(event.target.value);
    GetSelectedBook(event.target.value);
    // UpdateShelve(book, Select);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
        <option value="Moveto" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
