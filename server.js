var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer()
var path = require('path')
var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

// upload.single('filename') has to match the form input type = 'file' name = 'filename'
// using any other attr than the matching 'filename' won't work
app.post('/uploads', upload.single('filename'), function(req, res) {
        res.json({'file size in bytes': req.file.size})
})

/*
app.post('/', function(req, res) {
    req.send(req.body)
})
*/

app.listen(process.env.PORT || 8080, function() {
    console.log("App started")
})