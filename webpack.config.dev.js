import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: {
        index:[ path.resolve(__dirname, 'src/js/')]
    
    },
    target:'web',
    output:{
        path:path.resolve(__dirname, 'src'),
        publicPaths: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module:{
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }

}