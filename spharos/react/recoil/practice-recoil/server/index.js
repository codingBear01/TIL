const express = require('express');
const app = express();
const port = 5000;

/* middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/cart/:id', (req, res) => {
  const id = req.params.id;
  const cart = null; // mysql과 연동 후 db 받아옴
  res.json(cart);
});

app.listen(port, () => console.log(`Connected to ${port}`));
