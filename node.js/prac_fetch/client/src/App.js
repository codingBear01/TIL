function App() {
  // fetch()
  fetch('http://localhost:4000/api/todo')
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
    </div>
  );
}

export default App;
