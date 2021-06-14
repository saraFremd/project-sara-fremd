import React from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <>
      <nav>
        <ul>
              <Link to="/page1">PAGE_1</Link>{' '}
              <Link to="/page2">PAGE_2</Link>{' '}
              <Link to="/page3">PAGE_3</Link>
        </ul>
      </nav>
    </>
  );
}
