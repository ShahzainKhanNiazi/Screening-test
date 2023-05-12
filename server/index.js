import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/', (req, res) => {
  res.send(data.caraousel);
});

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
