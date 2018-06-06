const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
})

const PORT = 4500;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});