/**
 * Created by vineeth on 2/18/17.
 */
module.exports = function(app) {
    var equasions = ["Hello World"];

    app.post("/api/newFormula",newEquasion);
    app.get("/api/latestFormula",getLatest);
    app.get("/api/x1",getx1);
    app.get("/api/y1",gety1);
    app.get("/api/z1",getz1);
    app.get("/api/x2",getx2);
    app.get("/api/y2",gety2);
    app.get("/api/z2",getz2);
    app.get("/api/action",gettype);

    function gettype(req,res) {
        res.send("distance");
    }

    function getx1(req,res) {
        res.send("1");
    }

    function gety1(req,res) {
        res.send("2");
    }

    function getz1(req,res) {
        res.send("3");
    }


    function getx2(req,res) {
        res.send("3");
    }

    function gety2(req,res) {
        res.send("2");
    }
    function getz2(req,res) {
        res.send("1");
    }



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