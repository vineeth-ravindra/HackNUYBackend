/**
 * Created by vineeth on 2/18/17.
 */
module.exports = function(app) {
    var equasions = ["Hello World"];

    app.post("/api/newFormula",newEquasion);
    app.get("/api/latestFormula",getLatest);
    app.get("/",home);

    function getLatest(req,res) {
        var a = {
            "action" : "distance",
            "x1" : 1,
            "y1" : 5,
            "z1" : -5,
            "x2" : 3,
            "y2" : 2,
            "z2" : 5,
        };
        res.send(a)
    }
    function home(req,res) {
        res.send("Hello Odin");
    }
    function newEquasion(req,res) {
        var newEquasion  = req.body;
        console.log(newEquasion);
        equasions.push(newEquasion);
        res.send("Ok");
    }

};