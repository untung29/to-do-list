const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', function(req, res) {
    let currentDay = date.getDay();
    res.render('index.html', {listTitle: currentDay, newListItems: items});
});

app.post('/', function(req, res) {
    let newList = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(newList);
        res.redirect('/work');
    } else {
        items.push(newList);
        res.redirect('/');
    }
});

app.get('/work', function(req, res) {
    res.render("index.html", {listTitle: "Work List", newListItems: workItems});
});

// app.post('/work', function(req, res) {
//     let workItem = req.body.newItem;
//     workItems.push(workItem);
//     res.redirect('/work');
// });


app.listen(3000);