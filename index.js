// index.js
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;


app.use(cors());

const data = [{
  Name: "Roshan Jaiswal",
  Age: "23",
  Education: "Btech",

},
{
  Name: "Rajan Jaiswal",
  Age: "19",
  Education: "12",
}]

app.get('/', (req, res) => {
  res.send('Hello, I AM Roshan jaiswal!');
});

app.get('/data', (req, res) => {
  res.json(data);
})

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
