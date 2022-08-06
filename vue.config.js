module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
	configureWebpack: {
		devServer: {
			watchOptions: {
				poll: true,
				ignored: /node_modules/,
			}
		}
	},
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
	pages: {
		index: {
			entry: "src/main.js",
			title: "Rin Birthday 2022"
		}
	}
}
