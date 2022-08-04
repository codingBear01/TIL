import React from 'react';
import { useLocation } from 'react-router-dom';

function StateLocationData() {
  // If we have the following URL http://localhost/books?n=32#id then the return value of useLocation would look like this.

  /*
  {
    pathname: "/books",
    search: "?n=32",
    hash: "#id",
    key: "2JH3G3S",
    state: null
  }
  */

  const location = useLocation();
  return <div>StateLocationData</div>;
}

export default StateLocationData;
