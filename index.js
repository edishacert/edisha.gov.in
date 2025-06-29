const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/Default_VerifyCertificate.aspx', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/verify.html'));
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});rename index file
