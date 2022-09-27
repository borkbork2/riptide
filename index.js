const app = require('express')();

app.get('/', (req, res) => {
  res.send('website under construction lol...');
});

app.listen(8080);
