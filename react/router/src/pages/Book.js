import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function Book() {
  const { id } = useParams();
  const context = useOutletContext();

  return (
    <div>
      Book {id} {context.hello}
    </div>
  );
}

export default Book;
