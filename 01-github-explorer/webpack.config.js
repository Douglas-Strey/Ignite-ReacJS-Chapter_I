const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Assim eu passo o nome da pasta primeiro e depois o arquivo.
    // entry: 'src/index.jsx', Não vamos fazer assim pois muda o formato da barra dependendo do sistema operacional.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};