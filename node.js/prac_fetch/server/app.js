const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

/* middlewares */
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

let id = 2;
const todoList = [
  {
    id: 1,
    text: '할일 1',
    done: false,
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/todo', (req, res) => {
  res.json(todoList);
});

app.post('/api/todo', (req, res) => {
  const { text, done } = req.body;

  todoList.push({
    id: id++,
    text,
    done,
  });

  return res.send('success');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
