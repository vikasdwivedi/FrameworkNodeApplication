import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import wpconfig from '../webpack.config.dev';

const port = 3000;

/*Adding Webapack*/
const compiler = webpack(wpconfig);
const app = express();
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath: wpconfig.output.publicPath
}));



//Express web app
app.get('/', function(request, response){
    console.log(request.url);
    response.sendFile(path.join(__dirname,'../src/index.html'));
});

//for css
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