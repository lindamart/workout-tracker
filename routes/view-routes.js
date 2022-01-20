const path = require("path")

module.exports = (app)=>{

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