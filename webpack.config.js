const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'production';

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};

process.noDeprecation = true;

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {
		filename: '_build/bundle.js'
	},
	optimization: {
    minimizer: [
      new UglifyJsPlugin({
      	sourceMap: true,
      	uglifyOptions: { dead_code: true },
    	})
    ]
  },
	plugins: [
		new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv)}
    }),
    new ExtractTextPlugin('style.css'),
	],
	module: {
		rules: [
			{
    		test: /\.js$/,
    		exclude: /node_modules/,
    		use: {
    			loader: 'babel-loader',
    			options: { presets: ['env'] }
      	}
    	},
    	{
    		test: /\.(scss)$/,
    		use: ExtractTextPlugin.extract(
    					['css-loader?sourceMap', postcss, 'sass-loader?sourceMap']
    				)
    	}
    ]
	},
}
