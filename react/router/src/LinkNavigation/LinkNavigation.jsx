import React from 'react';
import { Link } from 'react-router-dom';

function LinkNavigation() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="../">Back</Link>
      <Link to="edit">Edit</Link>
    </>
  );
}

export default LinkNavigation;

// replace
// The replace prop is a boolean that when set to true will cause this link to replace the current page in the browser history. Imagine you have the following browser history.

// /
// /books
// /books/3
// If you click on a link that goes to the /books/3/edit page but it has the replace property set to true your new history will look like this.

// /
// /books
// /books/3/edit
// The page your were currently on was replaced with the new page. This means that if you click the back button on the new page it will bring you back to the /books page instead of the /books/3 page.

// reloadDocument
// This prop is another boolean and is very simple. If it is set to true your Link component will act like a normal anchor tag and do a full page refresh on navigation instead of just re-rendering the content inside your Routes component.

// state
// The final prop is called state. This prop lets you pass data along with your Link that does not show up anywhere in the URL. This is something we will cover in more depth when we talk about navigation data so we can ignore it for now.
