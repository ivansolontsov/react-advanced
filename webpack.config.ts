import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const PORT = 3000;
const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths: paths,
    isDev,
    port: PORT
});

export default config