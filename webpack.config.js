const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const fs = require("fs");
const deps = require("./package.json").dependencies;

// const oldWidgetNames = fs
//   .readdirSync("./src/oldWidgets/", { withFileTypes: true })
//   .map((file) => {
//     return file.name.slice(0, -3);
//   });

// const uiKitWidgetNames = fs
//   .readdirSync("./src/uiKitWidgets/", { withFileTypes: true })
//   .filter((file) => file.isDirectory())
//   .map((file) => {
//     return file.name;
//   });

const widgetNames = fs
  .readdirSync("./src/widgets/", { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((file) => {
    return file.name;
  });

// const createExposes = () => {
//   const widgets = new Set([...oldWidgetNames, ...uiKitWidgetNames]);
//   return [...widgets].reduce(
//     (exposes, name) => ({
//       ...exposes,
//       [`./${name}`]: `./src/widgets/${name}`,
//     }),
//     {}
//   );
// };
const createExposes = () => {
  return widgetNames.reduce(
    (exposes, name) => ({
      ...exposes,
      [`./${name}`]: `./src/widgets/${name}`,
    }),
    {}
  );
};

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "widgets",
      filename: "remoteEntry.js",
      exposes: {
        ...createExposes(),
        "./constants/widgets": "./src/constants/widgets",
      },
      remotes: {
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
