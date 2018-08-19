const path = require('path')
const htmlWebHtml = require('html-webpack-plugin')
module.exports = {
	entry: '.src/index.js',
	output: {
		filename: 'build.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				option: {
					'presets': [latest]
				},
				//打包除这个文件之外的文件
                exclude: path.resolve(__dirname,"./node_modules"),
                //打包包括的文件
                include: path.resolve(__dirname, "./src"),
			},
		]
	},
	plugins: [
		new htmlWebpackPlugin({
            filename: 'index.html',
            template: "index.html"
        })
	]
}