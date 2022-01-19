const path = require("path")

module.exports = (app)=>{

// youre going to want to sendFile** for the index.html, exercise.html, stats.html***********
// reference module 11 homework Note Taker on how to do this
// module 11 sample 
// app.get('/routes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/routes.html'))
//   );

// SendFile for the index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// SendFile exercise.html
app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// SendFile stats.html
app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

}

// do we still need module.exports = app with above format?? dont think its needed but cant see anything


// after this is completed and you can see all your html's then move to getting API routes working