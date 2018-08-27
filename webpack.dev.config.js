const path = require('path')
const htmlWebHtml = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
		      }
		    }
		]
	},
	plugins: [
		new htmlWebHtml({
            filename: 'index.html',
            template: "index.html"
        })
	]
}