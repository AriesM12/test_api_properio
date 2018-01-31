var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    var kode = 0;
    var file = "";

    if(req.url == "/"){
        // index
        kode = 200;
        file = "index.html";
    }else if(req.url == "/form"){
        // form-daftar
        kode = 200;
        file = "form-daftar.html";
    }else if(req.url == "/list"){
        // list-siswa
        kode = 200;
        file = "list-siswa.html";
    }

    res.writeHead(kode,{"Content-Type" : "text/html"});
    fs.createReadStream("./tamplate/"+file).pipe(res);
}).listen(7777);

console.log("Server Berjalan....");