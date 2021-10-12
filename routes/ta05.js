//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const session = require('express-session');
router.use(session({
	secret: 'XASDASDA'
}))

router.post('/reset', (req, res, next) => {
	sesh = req.session;
	sesh.destroy(res.redirect('/ta05'));
});
router.post('/change-style', (req, res, next) => {
	console.log("Change Style Page")
	let color = req.body.style;
	sesh = req.session;
	sesh.style=color;
	console.log("color is: "+sesh.style);
	res.redirect('/ta05');
});
router.post('/counter', (req, res, next) => {
	console.log("Counter page")
	let mode = req.body.counterMethod;
	sesh = req.session;
	if(mode=='inc'){
		sesh.counter+=1;
	}
	else if (mode == 'dec') {
		sesh.counter-=1;
	}
	console.log("counter at: "+sesh.counter);
	res.redirect('/ta05');
});

router.get('/', (req, res, next) => {
	sesh = req.session;
	console.log(sesh);
	if (sesh.style == undefined)
		sesh.style = "blue";
	if (sesh.counter == undefined)
		sesh.counter = 1;
	res.render('pages/ta05', {
		title: 'Team Activity 05',
		path: '/ta05',
		session: sesh
	});
});

module.exports = router;