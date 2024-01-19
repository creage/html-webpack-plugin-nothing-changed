const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: __dirname,
	mode: "development",
	resolve: {
		extensions: [".js"],
	},
	entry: {
		App: ["./App"],
	},
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "[name].js",
		library: "App",
		libraryTarget: "umd",
	},
	plugins: [
		new webpack.DllPlugin({
			name: "App",
			path: path.join(__dirname, "../dist", "manifest.json"),
			context: __dirname,
			entryOnly: false
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: "../index.html"
		})
	],
};
