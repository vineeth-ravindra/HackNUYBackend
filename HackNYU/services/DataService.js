/**
 * Created by vineeth on 2/18/17.
 */
module.exports = function(app) {
    var equasions = ["Hello World"];

    app.post("/api/newFormula",newEquasion);
    app.get("/",home);
    app.get("/api/latestFormula",getLatest);


    function getLatest(req,res) {
        if (equasions.length > 1) {
            res.send(equasions[0])
        } else
            res.sendStatus(404)
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