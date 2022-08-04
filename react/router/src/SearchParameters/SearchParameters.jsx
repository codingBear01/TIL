import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParameters() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get('n');

  return (
    <>
      <h1>{number}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}

export default SearchParameters;
