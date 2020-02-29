module.exports = function(app){
    var tempoSom;
    var contPasso;
app.post('/envExpA', envExpA = function(req,res){
     contPasso = require("../controllers/exp").expContPasso;
     tempoSom = req.body.tempoSom;
    console.log("Contador do Passo: ", contPasso);
    if(contPasso == 1){
        tempoSom = Number(tempoSom) + 10; 
        console.log("redefinindo valor para: ",tempoSom);
    }
    app.app.controllers.exp.envExpA(app,req,res,"TREINO");
    console.log(req.body);
    console.log("tempoSOM: ",tempoSom);
    return module.exports.expTempo =  parseFloat(tempoSom);
});

app.post('/envExpB', envExpB = function(req,res){
    contPasso = require("../controllers/exp").expContPasso;
    tempoSom = req.body.tempoSom;
    console.log("Contador do Passo: ", contPasso);
    if(contPasso == 1){
        tempoSom = Number(tempoSom)+ 15;
        console.log("redefinindo valor para: ",tempoSom);
    }
    app.app.controllers.exp.envExpB(app,req,res,"TREINO");
    console.log(req.body);
    console.log("tempoSOM: ",tempoSom);
    return module.exports.expTempo =  parseFloat(tempoSom);
});

app.post('/envExpATeste',function(req,res){
    contPasso = require("../controllers/exp").expContPasso;
    tempoSom = req.body.tempoSom;
    console.log("Contador do Passo: ", contPasso);
    if(contPasso == 1){
        tempoSom = Number(tempoSom) + 10; 
        console.log("redefinindo valor para: ",tempoSom);
    }
    app.app.controllers.exp.envExpA(app,req,res,"TESTE");
    console.log(req.body);
    return module.exports.expTempo =  parseFloat(tempoSom);
});

app.post('/envExpBTeste',function(req,res){
    contPasso = require("../controllers/exp").expContPasso;
    tempoSom = req.body.tempoSom;
    console.log("Contador do Passo: ", contPasso);
    if(contPasso == 1){
        tempoSom = Number(tempoSom)+ 15;
        console.log("redefinindo valor para: ",tempoSom);
    }
    app.app.controllers.exp.envExpB(app,req,res,"TESTE");
    console.log(req.body);
    return module.exports.expTempo =  parseFloat(tempoSom);
});

app.get('/continuar',function(req,res){
    app.app.controllers.exp.continuar(app,req,res,"TREINO");
});

app.get('/continuarTeste',function(req,res){
    app.app.controllers.exp.continuar(app,req,res,"TESTE");
});

app.get('/sairDescanso',function(req,res){
    app.app.controllers.render.sairDescanso(app,req,res);
});

}