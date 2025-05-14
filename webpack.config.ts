import path from "path";
import { type Configuration } from "webpack";
export default () => {
  const config: Configuration = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts"],
    },
  };

  return config;
};
