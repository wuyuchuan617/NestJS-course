import React, { useState } from "react";
import { BOOK_LIST } from "../../const/components";

import classes from "./BookList.module.css";
function BookList() {
  const [hoverItem, setHoverItem] = useState(null);
  return (
    <div>
      <div className={classes.title}>Books that I’ve read and loved 💙</div>
      <div className={classes.list}>
        {BOOK_LIST.map((book, index) => {
          return (
            <div key={index} className={classes.card}>
              <a target="_blank" href={book.url} rel="noopener noreferrer">
                <div
                  className={classes.imageCard}
                  onMouseEnter={() => setHoverItem(index)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <img
                    className={classes.image}
                    alt={book.title}
                    // layout="fill"
                    src={hoverItem === index ? book.image : book.engCover}
                  ></img>
                </div>{" "}
              </a>
              <div className={classes.context}>
                <p>{book.name}</p>
                <p>{book.engName}</p>
                <p>{book.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
