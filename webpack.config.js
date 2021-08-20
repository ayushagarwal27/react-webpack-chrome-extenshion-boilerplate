const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/test.tsx',
    module: {
        rules: [{ use: 'ts-loader', test: /\.tsx?$/, exclude: /node_modules/ }],
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/manifest.json'),
                    to: path.resolve('dist'),
                },
            ],
        }),
    ],
    output: {
        filename: 'index.js',
        path: path.resolve('dist'),
    },
};
