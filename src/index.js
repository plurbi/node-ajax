const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res) => {
    res.render('index.html');
});
app.listen(app.get('port'), () => {
    console.log('Server running');
});