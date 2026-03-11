import { defineConfig } from "vite";
import globalPackageJson from "./package.json" with { type: "json" };
import monkey from "vite-plugin-monkey";
import { MonkeyUserScript } from "vite-plugin-monkey";
import { merge } from "lodash";

export default (packageJson: any) => {
  let {
    name,
    author,
    description,
    homepage,
    license,
    version,
    userscriptConfig,
  } = merge(globalPackageJson, packageJson);

  let match = userscriptConfig?.match ?? ["http://*/*", "https://*/*"];
  let userscript = merge(
    {
      name,
      version,
      description,
      author,
      homepage,
      license,
      match,
    },
    userscriptConfig,
  ) as MonkeyUserScript;

  return defineConfig({ plugins: [monkey({ entry: "main.ts", userscript })] });
};
