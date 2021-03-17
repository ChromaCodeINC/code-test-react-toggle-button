const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less/,
    loaders: ["style-loader", "css-loader", "less-loader"],
    include: path.resolve(__dirname, "../")
  });
  config.resolve.alias = {
    ...config.resolve.alias,
    'dtrace-provider': path.resolve(__dirname, './empty_shim.js'),
    fs: path.resolve(__dirname, './empty_shim.js'),
    'safe-json-stringify': path.resolve(__dirname, './empty_shim.js'),
    mv: path.resolve(__dirname, './empty_shim.js'),
    'source-map-support': path.resolve(__dirname, './empty_shim.js')
  };

  return config;
};
