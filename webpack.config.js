/*

    An interactive, visual representation of the bm Cologne in 360°
    Copyright © 2024 Thiemo Küpper

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: '/js/main.js', // Dein Einstiegspunkt
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Dein HTML-Template
            filename: 'index.html', // Der Name der Ausgabe-HTML-Datei
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // Für alle .css-Dateien
                use: ['style-loader', 'css-loader'], // Verwendet style-loader und css-loader
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Für Bild-Dateiformate
                use: ['file-loader'], // Verwendet file-loader
            },
        ],
    },
};
