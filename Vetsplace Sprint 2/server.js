const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

app.use(bodyParser.json());

const pool = new Pool({
    user: 'Jesse', 
    host: 'localhost',
    database: 'vetsplace', 
    password: 'Stlouis5', 
    port: 5433,
});

app.get('/', (req, res) => {
  res.send('VetsPlace API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
