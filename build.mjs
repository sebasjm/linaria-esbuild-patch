import linaria from "@linaria/esbuild";
import esbuild from "esbuild";
esbuild
  .build({
    bundle: true,
    entryPoints: ["src/index.tsx"],
    loader: {
      ".svg": "file",
      ".png": "file",
    },
    format: "iife",
    minify: false,
    jsxFactory: "h",
    jsxFragment: "Fragment",
    outfile: "build/out.js",
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
    plugins: [
      linaria({
        babelOptions: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react",
            "@linaria",
          ],
        },
        sourceMap: true,
      }),
    ],
  })
  .catch(() => process.exit(1));
