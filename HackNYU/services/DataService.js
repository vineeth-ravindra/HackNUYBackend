/**
 * Created by vineeth on 2/18/17.
 */
module.exports = function(app) {
    var equasions = ["Hello World"];
    var pointA = ['1','1','1'];
    var pointB = ['2','2','2'];
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };


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
        res.send(pointA[0]);
    }

    function gety1(req,res) {
        res.send(pointA[1]);
    }

    function getz1(req,res) {
        res.send(pointA[2]);
    }


    function getx2(req,res) {
        res.send(pointB[0]);
    }

    function gety2(req,res) {
        res.send(pointB[1]);
    }
    function getz2(req,res) {
        res.send(pointB[2]);
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
	console.log("New queasion is ",newEquasion);
        if(newEquasion!=null) {

            newEquasion = Object.keys(newEquasion)[0];
            newEquasion = newEquasion.replaceAll("0?","");
            newEquasion = newEquasion.replaceAll("?","");
            newEquasion = newEquasion.replaceAll("(","");
            newEquasion = newEquasion.split(')-');
            var point1 = newEquasion[0];
            var point2 = newEquasion[1];
            point1 = point1.replaceAll(")","");
            point2 = point2.replaceAll(")","");
            point1 = point1.split(",");
            point2 = point2.split(",");
            if (point1.length >2 && point2.length >2) {
                pointA = point1;
                pointB = point2;
                console.log(pointA);
                console.log(pointB);
                res.send("Ok");
                return;
            }
        }
        res.sendStatus(404);
    }

};
