import { defineConfig } from "vite";
import globalPackageJson from "./package.json" with { type: 'json' };
import monkey from "vite-plugin-monkey";
import { MonkeyUserScript } from "vite-plugin-monkey";
import { merge } from "lodash";

export default (packageJson: any) => {
  let {
    author,
    description,
    homepage,
    license,
    version,
    userscriptExtra,
  } = merge({}, globalPackageJson, packageJson);

  return defineConfig({
    plugins: [
      monkey({
        entry: "main.ts",
        userscript: {
          author,
          description,
          homepage,
          license,
          version,
          ...userscriptExtra,
        } as MonkeyUserScript,
      }),
    ],
  })
};
