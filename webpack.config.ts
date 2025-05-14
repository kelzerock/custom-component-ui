import path from "path";
import { type Configuration } from "webpack";

export default () => {
  const config: Configuration = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                esModule: true, // Говорим о том, что хотим использовать ES Modules
                modules: {
                  namedExport: true, // Указываем, что предпочитаем именованый экспорт дефолтному
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts"],
    },
  };

  return config;
};
