const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
})

app.listen(process.env.PORT || 4500, () => {
	console.log('server now up.')
});