import express from 'express';
import path from 'path';
import open from 'open';


const port = 3000;
const app = express();

app.get('/', function(request, response){
    console.log(request.url);
    response.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/css/style.css', function(request, response){
    response.sendFile(path.join(__dirname, '../src/css/style.css'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:' + port);
    }
})