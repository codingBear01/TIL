import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo';

function App() {
  const [todoList, setTodoList] = useState(null);

  /* axios */
  const fetchData = async () => {
    const res = await axios.get(SERVER_URL);
    setTodoList(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    const done = e.target.done.checked;

    await axios.post(SERVER_URL, { text, done });
    fetchData();
  };
  /* fetch() */
  // const fetchData = () => {
  //   fetch(SERVER_URL)
  //     .then((res) => res.json())
  //     .then((data) => setTodoList(data));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   const text = e.target.text.value;
  //   const done = e.target.done.checked;

  //   fetch(SERVER_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       text,
  //       done,
  //     }),
  //   }).then(() => fetchData());
  // };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>

      {todoList?.map((el) => (
        <ul key={el.id}>
          <li>No. {el.id}</li>
          <li>What to do? {el.text}</li>
          <li>is done? {el.done ? 'YES' : 'NO'}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
