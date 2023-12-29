const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 3000;

// Use the routes defined in the separate file
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
