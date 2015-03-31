var util = require("./util");
exports.test = function(req, res) {
    var a = util.a();
    if(a==true){
       var b = util.b();
        res.send(b);
    }
    
}




