// For node to know our absolute file path we will be using the internal module path
const path = require("path");

const SRC_DIR = path.join(__dirname, '/client/src');
const PUBLIC_DIR = path.join(__dirname, '/client/public');

// Our export here is the configuration webpack will use
module.exports = {
  // [mode] will determine how our code will be bundled.
  // "development" will be human readable
  // "production" will be minified
  mode: "development",
  // [entry] this is the file where the bundling starts from.
  entry: `${SRC_DIR}/index.jsx`,
  // [output] is a configuration object to determine how and where to bundle our code
  output: {
    // [path] is where to output
    path: PUBLIC_DIR,
    // [filename] is the name of the file
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ]
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}

