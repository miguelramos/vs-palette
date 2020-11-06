/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

const path = require('path');
const webpack = require('webpack');
const base = require('./base.webpack.config.js');
const merge = require('merge-options');

/**
 *
 * @param {*} env
 * @returns webpack.Configuration
 */
function getExtensionConfig(env) {
	const baseConfig = base.getExtensionConfig(env);

	/** @type webpack.Configuration */
	const config = {
		target: 'node',
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'out'),
			libraryTarget: "commonjs",
			devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
		}
	};

	return merge(baseConfig, config);
}

module.exports = function (env) {
	env = env || {};
	env.production = !!env.production;
	return [
		getExtensionConfig(env),
		base.getWebviewConfig(env, './src/main.ts', 'main.js')
	];
};
