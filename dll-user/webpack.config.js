const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: ["./index"],
	},
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "[name].js"
	},
	resolve: {
		extensions: [".js"],
	},
	plugins: [
		new webpack.DllReferencePlugin({
			scope: 'Dll',
			context: path.join(__dirname, "..", "dll"),
			manifest: require("../dist/manifest.json"),
			extensions: ['', '.js']
		}),
		new HtmlWebpackPlugin({
			chunks: ["index"],
			filename: "index.html",
			template: "../dist/index.html"
		}),
	],
	devServer: {
		port: 8085,
		hot: false,
		static: [
			{
				directory: '../dist',
				watch: false
			}
		]
	}
};
